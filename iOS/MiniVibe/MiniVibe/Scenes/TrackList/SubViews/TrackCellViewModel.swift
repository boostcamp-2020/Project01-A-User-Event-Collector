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
        if let isFavorite = track.isFavorite {
            self.isFavorite = isFavorite
        } else {
            self.isFavorite = false
        }
        toggleSubscription()
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
        // TODO:- Server로 isFavorite update
    }
    
    private func addToFavorite(track: Track, isFavorite: Bool) {
        if isFirst {
            isFirst = false
            return
        }
        if isFavorite {
            var track = track
            track.isFavorite = isFavorite
            coreTrackAPI.create(with: track)
        } else {
            coreTrackAPI.delete(id: track.id)
        }
    }
    
}
