//
//  TodayViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/02.
//

import Foundation

class TodayViewModel: ObservableObject {
    @Published var stations = [DJStation]()
    @Published var recommends = [Playlist]()
    @Published var favorites = [Playlist]()
    @Published var magazines = [Magazine]()
    @Published var tracks = [Track]()
    
    private let networkManager = NetworkManager()
    
    func fetchAll() {
        fetch(type: .djStations)
        fetch(type: .favorites)
        fetch(type: .magazines)
        fetch(type: .recommendations)
//        fetch(type: .playlists, id: 18)
    }
    
    func fetch(type: MiniVibeType, id: Int? = nil) {
        let url = URLBuilder(pathType: .api,
                             endPoint: type,
                             id: id).create()
        let urlRequest = RequestBuilder(url: url,
                                        method: .get).create()
        networkManager.request(urlRequest: urlRequest) { [weak self] data in
            switch type {
            case .magazines:
                if let decodedData = try? JSONDecoder().decode(Magazines.self, from: data) {
                    DispatchQueue.main.async {
                        self?.magazines = decodedData.magazines
                    }
                }
            case .djStations:
                if let decodedData = try? JSONDecoder().decode(DJStationResponse.self, from: data) {
                    DispatchQueue.main.async {
                        self?.stations = decodedData.djStations
                    }
                }
            case .playlists:
                if let decodedData = try? JSONDecoder().decode(PlayListReponse.self, from: data) {
                    DispatchQueue.main.async {
                        if let tracks = decodedData.playlist.tracks {
                            self?.tracks = tracks
                        }
                    }
                }
            default:
                if let decodedData = try? JSONDecoder().decode(Playlists.self, from: data) {
                    DispatchQueue.main.async {
                        switch type {
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
