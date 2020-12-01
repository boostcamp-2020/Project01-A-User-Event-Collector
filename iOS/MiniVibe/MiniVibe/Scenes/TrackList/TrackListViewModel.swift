//
//  TrackListViewModel.swift
//  DemoTrackView
//
//  Created by 강병민 on 2020/11/22.
//

import Foundation

struct TrackGroup: Identifiable {
    let id = UUID()
    var tracks = [Track]()
    mutating func add(_ track: Track){
        tracks.append(track)
    }
    mutating func removeAll(){
        tracks.removeAll()
    }
}

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
    
    func getTracksOfFive() -> [TrackGroup] {
        let chunked = tracks.chunked(into: 5).map { tracks -> TrackGroup in
            TrackGroup(tracks: tracks)
        }
//        var group1 = TrackGroup(tracks: Array(TestData.playlist.tracks.prefix(5)))
//        var group2 = TrackGroup(tracks: Array(TestData.playlist.tracks.prefix(5)))
//        groups.append(contentsOf: [group1,group2])
//        var tempGroup = TrackGroup()
//        var count = 0
//        for (index,track) in tracks.enumerated() {
//            if count == 5 {
//                groups.append(tempGroup)
//                tempGroup.removeAll()
//                count = 0
//            } else {
//                tempGroup.add(track)
//                count += 1
//            }
//        }
//        groups.append(tempGroup)
        return chunked
    }
    
}

extension Array {
    func chunked(into size: Int) -> [[Element]] {
        return stride(from: 0, to: count, by: size).map {
            Array(self[$0 ..< Swift.min($0 + size, count)])
        }
    }
}
