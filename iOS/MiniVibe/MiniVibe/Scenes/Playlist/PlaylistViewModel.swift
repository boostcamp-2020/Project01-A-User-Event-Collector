//
//  PlaylistViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/01.
//

import Foundation
import Combine

class PlaylistViewModel: ObservableObject {
    @Published var playlist: Playlist?
    
    private let network = NetworkService(session: URLSession.shared)
    private var cancellabes = Set<AnyCancellable>()
    
    func fetch(id: Int) {
        let url = URLBuilder(pathType: .api, endPoint: .playlists, id: id, filterQuery: nil, limitQuery: nil).create()
        
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
                if let decodedData = try? JSONDecoder().decode(PlayListReponse.self, from: data) {
                    DispatchQueue.main.async {
                        self.playlist = decodedData.playlist
                    }
                }
            }
            .store(in: &cancellabes)
    }
}
