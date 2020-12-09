//
//  NowPlayingViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/27.
//

import Foundation
import Combine
import AVFoundation
import MediaPlayer

class PlayerViewModel: ObservableObject {
    @Published var currentTrack: Track?
    @Published var queue: [Track] = []
    @Published var isPlaying = true
    @Published var isShuffle = false
    @Published var isRepeat = false
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
    
    private let session = AVAudioSession.sharedInstance()// Audio session object
    private var progressObserver: NSKeyValueObservation!// Observer
    
    init(manager: AnalyticsManager) {
        self.manager = manager
        trackPlayingSubscription()
        shuffleSubscription()
        randomSubscription()
        setupVolumeListener()
    }
    
    func update(with track: Track) {
        safeAppend(track)
        currentTrack = track
        isPlaying = true
    }
    
    func update(with tracks: [Track], isShuffled: Bool = false) {
        let mytracks = isShuffled ? tracks.shuffled() : tracks
        mytracks.forEach { safeAppend($0) }
        currentTrack = queue.last
        isPlaying = true
        manager.log(PlayerEvent.playlistPlayed(isShuffled))
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
    
    func setupVolumeListener() {
        do {
            try session.setActive(true, options: .notifyOthersOnDeactivation)
        } catch {
            print("cannot activate session")
        }
        progressObserver = session.observe(\.outputVolume) { (session, _) in
            print(session.outputVolume)
        }
    }
    
}

// MARK: Combine과 관련된 subscription 함수들
extension PlayerViewModel {
    
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
            .sink { isRepeat in
                self.manager.log(PlayerEvent.repeat(isRepeat))
            }
            .store(in: &subscriptions)
    }

}
