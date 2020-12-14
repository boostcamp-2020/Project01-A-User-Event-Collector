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
    
    private let networkManager = NetworkManager()
    
    func fetch(type: MiniVibeType) {
        let url = URLBuilder(pathType: .api,
                             endPoint: type).create()
        let urlRequest = RequestBuilder(url: url,
                                        method: .get).create()
        networkManager.request(urlRequest: urlRequest) { [weak self] data in
            switch type {
            case .magazines:
                if let decodedData = try? JSONDecoder().decode(Magazines.self, from: data) {
                    DispatchQueue.main.async { [weak self] in
                        self?.thumbnails = decodedData.magazines
                    }
                }
            default:
                if let decodedData = try? JSONDecoder().decode(Playlists.self, from: data) {
                    DispatchQueue.main.async { [weak self] in
                        self?.thumbnails = decodedData.playlists
                    }
                }
            }
        }
        
    }
}
