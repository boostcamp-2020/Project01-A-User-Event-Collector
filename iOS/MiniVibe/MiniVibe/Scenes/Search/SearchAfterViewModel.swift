//
//  SearchAfterViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/03.
//

import SwiftUI

class SearchAfterViewModel: MiniVibeViewModel, ObservableObject {
    
    @Published var tracks: [Track]?
    @Published var albums: [Album]?
    @Published var artists: [Artist]?
    
    func fetch(searchText: String) {
        internalFetch(endPoint: .search, filterQuery: searchText) { [weak self] data in
            if let decodedData = try? JSONDecoder().decode(Search.self, from: data) {
                DispatchQueue.main.async {
                    self?.tracks = decodedData.tracks
                    self?.albums = decodedData.albums
                    self?.artists = decodedData.artists
                }
            }
        }
    }
}
