//
//  TrackCellViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/08.
//

import SwiftUI
import Combine
import CoreData

class TrackCellViewModel: ObservableObject {
    @Published var track: Track
    @Published var isSavedToLibrary: Bool
    
    private let coreTrackAPI = CoreTrackAPI()
    private var cancellables = Set<AnyCancellable>()
    private var isFirst = true
    
    init(track: Track) {
        self.track = track
        if let isFavorite = track.isSavedToLibrary {
            self.isSavedToLibrary = isFavorite
        } else {
            self.isSavedToLibrary = false
        }
        toggleSubscription()
    }
    
    deinit {
        cancellables.forEach { $0.cancel() }
    }
    
    func didToggleLiked() {
        isSavedToLibrary.toggle()
    }
    
    func toggleSubscription() {
        $isSavedToLibrary
            .sink { [weak self] isFavorite in
                self?.post(isFavorite: isFavorite)
            }
            .store(in: &cancellables)
    }
    
    private func post(isFavorite: Bool) {
        postToServer()
        addToLibrary(track: track, isSavedToLibrary: isFavorite)
    }
    
    private func postToServer() {
        // TODO:- Server로 liked update
    }
    
    private func addToLibrary(track: Track, isSavedToLibrary: Bool) {
        if isFirst {
            isFirst = false
            return
        }
        if isSavedToLibrary {
            var track = track
            track.isSavedToLibrary = isSavedToLibrary
            coreTrackAPI.create(with: track)
        } else {
            coreTrackAPI.delete(id: track.id)
        }
    }
    
}
