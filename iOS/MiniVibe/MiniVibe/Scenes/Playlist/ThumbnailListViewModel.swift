//
//  ThumbnailListViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI
import Combine

class ThumbnailListViewModel: MiniVibeViewModel, ObservableObject {
    @Published var thumbnails = [Thumbnailable]()
    
    private let network = NetworkService(session: URLSession.shared)
    private var cancellabes = Set<AnyCancellable>()
    
    func fetch(type: MiniVibeType) {
        
        internalFetch(endPoint: type) { [weak self] data in
            switch type {
            case .magazines:
                if let decodedData = try? JSONDecoder().decode(Magazines.self, from: data) {
                    DispatchQueue.main.async {
                        self?.thumbnails = decodedData.magazines
                    }
                }
            default:
                if let decodedData = try? JSONDecoder().decode(Playlists.self, from: data) {
                    DispatchQueue.main.async {
                        self?.thumbnails = decodedData.playlists
                    }
                }
            }
        }
        
    }
}

