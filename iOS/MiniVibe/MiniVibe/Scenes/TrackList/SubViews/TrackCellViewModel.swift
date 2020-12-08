//
//  TrackCellViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/08.
//

import Foundation
import Combine

class TrackCellViewModel: MiniVibeViewModel, ObservableObject {
    @Published var track: Track
    @Published var isFavorite = false
    
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
    
    func post(isFavorite: Bool) {
        postToServer()
        postToCoreData()
    }
    
    func postToServer() {
        
    }
    
    func postToCoreData() {
        
    }
    
}
