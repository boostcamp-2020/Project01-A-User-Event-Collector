//
//  ThumbnailListViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI
import Combine

class ThumbnailListViewModel: ObservableObject {
    @Published var thumbnails = [Thumbnailable]()
    
    private let network = NetworkService(session: URLSession.shared)
    private var cancellabes = Set<AnyCancellable>()
    
    func fetch(type: MiniVibeType, id: Int) {
        let url = URLBuilder(pathType: .api, endPoint: type, id: nil, filterQuery: nil, limitQuery: nil).create()
        
        guard let request = RequestBuilder(url: url,
                                           body: nil,
                                           headers: nil).create() else { return }
        network.request(request: request)
            .sink { result in
                switch result {
                case .failure(let error):
                    print(error)
                case .finished:
                    print("success")
                }
            } receiveValue: { data in
                switch type {
                case .magazines:
                    if let decodedData = try? JSONDecoder().decode(Magazines.self, from: data) {
                        DispatchQueue.main.async {
                            self.thumbnails = decodedData.magazines
                        }
                    }
                default:
                    if let decodedData = try? JSONDecoder().decode(Playlists.self, from: data) {
                        DispatchQueue.main.async {
                            self.thumbnails = decodedData.playlists
                        }
                        
                    }
                    
                }
            }
            .store(in: &cancellabes)
        
        //        let playlist1 = TestData.playlist
        //        let playlistList = [playlist1]
        //            self.thumbnails = playlistList
    }
}

