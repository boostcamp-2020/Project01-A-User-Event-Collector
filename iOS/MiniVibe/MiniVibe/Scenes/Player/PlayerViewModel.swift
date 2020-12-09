//
//  NowPlayingViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/27.
//

import Foundation
import Combine

class PlayerViewModel: ObservableObject {
    // TODO: - 외부 접근이 필요 없는 곳에는 private 설정하기
    @Published var currentTrack: Track?
    @Published var queue: [Track] = []
    @Published var isPlaying = true
    @Published var isShuffle = false
    @Published var isRepeat = false
    
    private let coreTrackAPI = CoreTrackAPI()
    var subscriptions = Set<AnyCancellable>()
    var trackName: String {
        currentTrack?.name ?? "오늘 뭐 듣지?"
    }
    var artist: String {
        currentTrack?.artist ?? "듣고 싶은 노래를 추가하세요"
    }
    var coverURLString: String? {
        currentTrack?.album?.cover
    }
    
    let manager: AnalyticsManager

    init(manager: AnalyticsManager) {
        self.manager = manager
        trackPlayingSubscription()
        shuffleSubscription()
        randomSubscription()
    }

    func update(with track: Track) {
        safeAppend(track)
        currentTrack = track
        isPlaying = true
    }
    
    func update(with tracks: [Track]) {
        tracks.forEach { safeAppend($0) }
        currentTrack = queue.last
        isPlaying = true
    }
    
    func reorder(from source: IndexSet, to destination: Int) {
        queue.move(fromOffsets: source, toOffset: destination)
    }
    
    func safeAppend(_ track: Track) {
        if queue.contains(where: {$0.id == track.id}) {
            queue.removeAll(where: {$0.id == track.id})
        }
        queue.append(track)

    }

    func trackPlayingSubscription() {
        $isPlaying
            .sink { [weak self] isPlaying in
                if let id = self?.currentTrack?.id {
                    if isPlaying {
                        self?.manager.log(PlayerEvent.trackPlayed(id))
                    } else {
                        self?.manager.log(PlayerEvent.trackPaused(id))
                    }
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
            .sink { [weak self] isRepeat in
                self?.manager.log(PlayerEvent.repeat(isRepeat))
            }
            .store(in: &subscriptions)
    }
    
}
