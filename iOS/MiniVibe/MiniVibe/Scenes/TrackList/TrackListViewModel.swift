//
//  TrackListViewModel.swift
//  DemoTrackView
//
//  Created by 강병민 on 2020/11/22.
//

import Foundation

class TrackListViewModel: ObservableObject {
    @Published var tracks = [Track]()
    
    func createTracks(tracks: [Track]) {
        self.tracks = tracks
    }
    
    func toggleIsFavorite(for id: Int) {
        if let index = tracks.firstIndex(where: { $0.id == id }) {
//            나중에 api에서 track에 isFavorite를 함께 줄때 적용
//            tracks[index].isFavorite.toggle()
        }
    }
    
}

extension Array {
    func chunked(into size: Int) -> [[Element]] {
        return stride(from: 0, to: count, by: size).map {
            Array(self[$0 ..< Swift.min($0 + size, count)])
        }
    }
}
