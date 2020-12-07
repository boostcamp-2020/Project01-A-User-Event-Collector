//
//  NowPlayingViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/27.
//

import Foundation
import Combine

class PlayerViewModel: ObservableObject {
    @Published var currentTrack = TestData.defaultTrack
    @Published var queue: [Track] = [TestData.defaultTrack]
    @Published var isPlaying = true
    @Published var isShuffle = false
    @Published var isRepeat = false
    var subscriptions = Set<AnyCancellable>()
    var trackName: String {
        currentTrack.name
    }
    var artist: String {
        currentTrack.artists?.first?.name ?? ""
    }
    var coverURLString: String? {
        currentTrack.album?.cover
    }
    
    let manager: AnalyticsManager

    init(manager: AnalyticsManager) {
        self.manager = manager
        trackPlayingSubscription()
        shuffleSubscription()
        randomSubscription()
    }

    func updateWith(track: Track) {
        currentTrack = track
        isPlaying = true
        if queue.contains(where: {$0.id == track.id}) {
            queue.removeAll(where: {$0.id == track.id})
        }
        queue.append(track)
    }
    
    func reorder(from source: IndexSet, to destination: Int) {
        queue.move(fromOffsets: source, toOffset: destination)
    }

    func trackPlayingSubscription() {
        $isPlaying
            .sink { isPlaying in
                if isPlaying {
                    self.manager.log(PlayerEvent.trackPlayed(self.currentTrack.id))
                } else {
                    self.manager.log(PlayerEvent.trackPaused(self.currentTrack.id))
                }
            }
            .store(in: &subscriptions)
    }
    
    func shuffleSubscription() {
        $isShuffle
            .sink { isShuffle in
                self.manager.log(PlayerEvent.shuffle(isShuffle))
            }
            .store(in: &subscriptions)
    }
    
    func randomSubscription() {
        $isRepeat
            .sink { isRepeat in
                self.manager.log(PlayerEvent.repeat(isRepeat))
            }
            .store(in: &subscriptions)
    }
    
}
