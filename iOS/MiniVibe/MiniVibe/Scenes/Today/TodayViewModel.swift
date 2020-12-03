//
//  TodayViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/02.
//

import Foundation

class TodayViewModel: MiniVibeViewModel, ObservableObject {
    @Published var stations = [DJStation]()
    @Published var recommends = [Playlist]()
    @Published var favorites = [Playlist]()
    @Published var magazines = [Magazine]()
    
    func fetchAll() {
        fetch(type: .favorites)
        fetch(type: .magazines)
        fetch(type: .recommendations)
    }
    
    
    func fetch(type: MiniVibeType) {
        internalFetch(endPoint: type) { [weak self] data in
            switch type {
            case .magazines:
                if let decodedData = try? JSONDecoder().decode(Magazines.self, from: data) {
                    DispatchQueue.main.async {
                        self?.magazines = decodedData.magazines
                    }
                }
            case .djStations:
                self?.stations = [DJStation(id: 1, imageName: nil)]
            default:
                if let decodedData = try? JSONDecoder().decode(Playlists.self, from: data) {
                    DispatchQueue.main.async {
                        switch type{
                        case .favorites:
                            self?.favorites = decodedData.playlists
                        case .recommendations:
                            self?.recommends = decodedData.playlists
                        default:
                            return
                        }
                        
                    }
                }
            }
        }
        
    }
    
    
}
