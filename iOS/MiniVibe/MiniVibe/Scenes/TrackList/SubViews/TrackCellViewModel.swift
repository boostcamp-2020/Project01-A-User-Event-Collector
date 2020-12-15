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
    @Published var isFavorite: Bool
    
    private let coreTrackAPI = CoreTrackAPI()
    private var cancellables = Set<AnyCancellable>()
    private var isFirst = true
    
    init(track: Track) {
        self.track = track
        if let isFavorite = track.liked {
            self.isFavorite = isFavorite
        } else {
            self.isFavorite = false
        }
        toggleSubscription()
    }
    
    deinit {
        cancellables.forEach { $0.cancel() }
    }
    
    func didToggleFavorite() {
        isFavorite.toggle()
    }
    
    func toggleSubscription() {
        $isFavorite
            .sink { [weak self] isFavorite in
                self?.post(isFavorite: isFavorite)
            }
            .store(in: &cancellables)
    }
    
    private func post(isFavorite: Bool) {
        postToServer()
        addToFavorite(track: track, isFavorite: isFavorite)
    }
    
    private func postToServer() {
        // TODO:- Server로 liked update
    }
    
    private func addToFavorite(track: Track, isFavorite: Bool) {
        if isFirst {
            isFirst = false
            return
        }
        if isFavorite {
            var track = track
            track.liked = isFavorite
            coreTrackAPI.create(with: track)
        } else {
            coreTrackAPI.delete(id: track.id)
        }
    }
    
}
