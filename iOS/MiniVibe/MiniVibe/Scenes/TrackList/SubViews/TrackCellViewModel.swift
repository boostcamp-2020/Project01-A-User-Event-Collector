//
//  TrackCellViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/08.
//

import SwiftUI
import Combine
import CoreData

class TrackCellViewModel: MiniVibeViewModel, ObservableObject {
    @Published var track: Track
    @Published var isFavorite = false
    
    private let coreTrackAPI = CoreTrackAPI()
    private var cancellables = Set<AnyCancellable>()
    
    init(track: Track) {
        self.track = track
        super.init()
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
        // TODO: - FavoriteTracks CoreData model 생성 및 분리
        addToFavorite(track: track, isFavorite: isFavorite)
    }
    
    private func postToServer() {
        // TODO:- Server로 isFavorite update
    }
    
    private func addToFavorite(track: Track, isFavorite: Bool) {
        if isFavorite {
            coreTrackAPI.create(with: track)
        } else {
            coreTrackAPI.delete(id: track.id)
        }
    }
    
}
