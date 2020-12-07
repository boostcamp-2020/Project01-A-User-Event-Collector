//
//  NowPlayingViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/27.
//

import Foundation

class PlayerViewModel: ObservableObject {
    @Published var currentTrack = Track(id: 37,
                                        name: "Dynamite (Instrumental)",
                                        albumTrackNumber: 2,
                                        albumID: 8,
                                        album: Album(id: 8,
                                                     name: "Dynamite",
                                                     description: "방탄",
                                                     cover: "https://musicmeta-phinf.pstatic.net/album/004/820/4820425.jpg?type=r360Fll&v=20200918130108"),
                                        artists: [Artist(id: 3, name: "방탄소년단", cover: nil)])
    @Published var queue = [Track]()
    var trackName: String {
        currentTrack.name
    }
    var artist: String {
        currentTrack.artists?.first?.name ?? ""
    }
    var coverURLString: String? {
        currentTrack.album?.cover
    }
    
    func updateWith(track: Track) {
        currentTrack = track
        if queue.contains(where: {$0.id == track.id}) {
            queue.removeAll(where: {$0.id == track.id})
        }
        queue.append(track)
    }

}
