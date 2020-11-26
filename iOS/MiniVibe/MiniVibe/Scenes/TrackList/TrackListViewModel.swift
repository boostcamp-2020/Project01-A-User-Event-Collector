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
        self.tracks = [Track(id: 1, title: "Dynamite", artist: "방탄소년단", isFavorite: true),
                       Track(id: 2, title: "Blueming", artist: "아이유", isFavorite: false),
                       Track(id: 3, title: "FeelGood", artist: "프로미스나인", isFavorite: true),
                       Track(id: 4, title: "기억을 걷는 시간", artist: "넬", isFavorite: false),
                       Track(id: 5, title: "우산", artist: "윤하", isFavorite: true),
                       Track(id: 6, title: "나의 사춘기에게", artist: "볼빨간사춘기", isFavorite: false),
                       Track(id: 7, title: "Lovesick Girls", artist: "블랙핑크", isFavorite: true)
        ]
    }
    
    func toggleIsFavorite(for id: Int) {
        if let index = tracks.firstIndex(where: { $0.id == id }) {
            tracks[index].isFavorite.toggle()
        }
    }
    
}
