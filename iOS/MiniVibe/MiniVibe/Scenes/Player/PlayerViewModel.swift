//
//  NowPlayingViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/27.
//

import Foundation

class PlayerViewModel: ObservableObject {
    @Published var currentTrack = Track(id: 1, title: "Dynamite", artist: "방탄소년단", isFavorite: true)
    @Published var queue = [Track]()
    
    func updateWith(track: Track) {
        currentTrack = track
        if queue.contains(where: {$0.id == track.id}) {
            queue.removeAll(where:  {$0.id == track.id})
        }
        queue.append(track)
    }

}


