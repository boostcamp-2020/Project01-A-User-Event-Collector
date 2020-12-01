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
    
    //    static let favoritePlaylistItems: [CategoryCell] =
    //        [.init(id: 1, imageName: "favorite1", title: "잠못드는 밤", description: "VIBE"),
    //         .init(id: 2, imageName: "favorite2", title: "Kanye West 대표곡", description: "내가 만든 플레이리스트"),
    //         .init(id: 4, imageName: "favorite3", title: "Avicii 대표곡", description: "VIBE"),
    //        ]
    //    static let recomendPlaylistItems: [CategoryCell] =
    //        [.init(id: 1, imageName: "recommend1", title: "올림픽대로", description: "VIBE"),
    //         .init(id: 2, imageName: "recommend2", title: "하우스 파티", description: "VIBE"),
    //         .init(id: 4, imageName: "recommend3", title: "꿀 떨어지는 R&B", description: "VIBE"),
    //        ]
    //
    func fetch(type: ThumbnailRoutingType, id: Int) {
        let url = URLBuilder(pathType: .api, endPoint: .playlists, id: nil, filterQuery: nil, limitQuery: nil).create()
        
        guard let request = RequestBuilder<Playlist>(url: url,
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

