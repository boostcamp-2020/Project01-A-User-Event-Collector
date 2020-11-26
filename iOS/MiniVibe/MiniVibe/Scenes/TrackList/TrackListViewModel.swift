//
//  TrackListViewModel.swift
//  DemoTrackView
//
//  Created by 강병민 on 2020/11/22.
//

import Foundation

class TrackListViewModel: ObservableObject {
    @Published var tracks = [Track]()
    
    func fetchTracks() {
        self.tracks = [Track(id: 1, title: "Dyanamite", artist: "방탄소년단", isFavorite: true),
                       Track(id: 2, title: "Blooming", artist: "아이유", isFavorite: false),
                       Track(id: 3, title: "Feel Good", artist: "프로미스나인", isFavorite: true),
                       Track(id: 4, title: "Alone", artist: "Marshmello", isFavorite: false)
        ]
    }
    
    func toggleIsFavorite(for id: Int) {
        if let index = tracks.firstIndex(where: { $0.id == id }) {
            tracks[index].isFavorite.toggle()
        }
    }
    
}
