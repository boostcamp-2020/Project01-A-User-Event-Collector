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
    @Published var currentTrackIndex: Int?
    @Published var queue: [Track] = []
    @Published var isPlaying = false
    @Published var isShuffle = false
    @Published var isRepeat = false
    var volumeChangeAmount = 0
    var timer: Timer?
    @Published private var timeRemaining = 3
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
        setupSubscriptions()
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
    
    func changeCurrentTrackInQueue(to track: Track) {
        currentTrack = track
    }
    
    func playNextTrack() {
        guard let nextIndex = getOptionalNextIndex() else { return }
        currentTrack = queue[nextIndex]
    }
    
    func playPreviousTrack() {
        guard let previousIndex = getOptionalPreviousIndex() else { return }
        currentTrack = queue[previousIndex]
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
    
    @objc func changeRemainingTime() {
        timeRemaining -= 1
    }
    
    func checkVolume() {
        if self.volumeChangeAmount >= 3 {
            self.manager.log(PlayerEvent.volumeChanged)
        }
        self.volumeChangeAmount = 0
    }
    
    func getOptionalNextIndex() -> Int? {
        guard let currentTrackIndex = currentTrackIndex else { return nil }
        if currentTrackIndex == queue.count - 1 {
            return nil
        } else {
            return queue.index(after: currentTrackIndex)
        }
    }
    
    func getOptionalPreviousIndex() -> Int? {
        guard let currentTrackIndex = currentTrackIndex else { return nil }
        if currentTrackIndex == 0 {
            return nil
        } else {
            return queue.index(before: currentTrackIndex)
        }
    }

}
// MARK: setup하는 함수들
extension PlayerViewModel {
    
    func setupSubscriptions() {
        trackPlayingSubscription()
        shuffleSubscription()
        randomSubscription()
        timeSubscription()
        trackIndexSubscription()
    }
    
    func setupVolumeListener() {
        do {
            try session.setActive(true, options: .notifyOthersOnDeactivation)
        } catch {
            print("cannot activate session")
        }
        progressObserver = session.observe(\.outputVolume) { (session, _) in
            self.volumeChangeAmount += 1
            print(self.volumeChangeAmount)
        }
    }
    
    func setupTimer(isPlaying: Bool) {
        timer?.invalidate() // 기존에 timer가 있었다면 invalidate 시키고 새롭게 만들어야함
        if isPlaying {
            timeRemaining = 3
            timer = Timer.scheduledTimer(timeInterval: 1 ,
                                             target: self,
                                             selector: #selector(changeRemainingTime),
                                             userInfo: nil,
                                             repeats: true)
            guard let timer = timer else { return }
            RunLoop.main.add(timer, forMode: .common)
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
                    self?.setupTimer(isPlaying: isPlaying)
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
    
    func timeSubscription() {
        $timeRemaining
            .sink { timeRemaining in
                if timeRemaining <= 0 {
                    self.timer?.invalidate()
                    self.checkVolume()
                }
            }
            .store(in: &subscriptions)
    }
    
    func trackIndexSubscription() {
        $currentTrack
            .compactMap { $0 }
            .sink { track in
                self.currentTrackIndex = self.queue.firstIndex(where: {$0.id == track.id})
            }
            .store(in: &subscriptions)
    }
}
