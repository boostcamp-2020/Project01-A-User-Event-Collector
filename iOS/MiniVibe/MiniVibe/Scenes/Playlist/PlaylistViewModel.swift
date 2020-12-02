//
//  PlaylistViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/01.
//

import Foundation

class PlaylistViewModel: MiniVibeViewModel, ObservableObject {
    @Published var playlist: Playlist?
    
    func fetch(id: Int) {
        internalFetch(endPoint: .playlists, id: id) { [weak self] data in
            if let decodedData = try? JSONDecoder().decode(PlayListReponse.self, from: data) {
                DispatchQueue.main.async {
                    self?.playlist = decodedData.playlist
                }
            }
        }
    }
}
