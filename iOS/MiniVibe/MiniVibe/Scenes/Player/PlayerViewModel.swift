//
//  NowPlayingViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/27.
//

import SwiftUI
import Combine
import AVFoundation
import MediaPlayer
import CoreData
import DiveEventCollector

class PlayerViewModel: ObservableObject {
    @Published var currentTrack: Track?
    @Published var queue: [Track] = []
    @Published var isPlaying = false
    @Published var isShuffle = false
    @Published var isRepeat = false
    @Published var isFavorite = false
    @Published private var timeRemaining = 3
    
    private var isInitial = true
    private let coreTrackAPI = CoreTrackAPI()
    private var volumeChangeAmount = 0
    private var timer: Timer?
    private var cancellables = Set<AnyCancellable>()
    
    private let session = AVAudioSession.sharedInstance()// Audio session object
    private var progressObserver: NSKeyValueObservation!// Observer
    
    var closePlayerView: (() -> Void)?
    
    var trackName: String {
        currentTrack?.name ?? "오늘 뭐 듣지?"
    }
    var artist: String {
        currentTrack?.artist ?? "듣고 싶은 노래를 추가하세요"
    }
    var coverURLString: String? {
        currentTrack?.coverURLString
    }
    var coverData: Data? {
        currentTrack?.coverData
    }
    var currentTrackIndex: Int? {
        queue.firstIndex { track -> Bool in
            track.id == currentTrack?.id
        }
    }
    
    let manager: EventManager
    
    init(manager: EventManager) {
        self.manager = manager
        setupSubscriptions()
        setupVolumeListener()
        fetchFromCoreData()
        isInitial = false
    }
    
    deinit {
        cancellables.forEach { $0.cancel() }
    }
    
    // 새로운 트랙(음원)을 최근 재생한 큐에 추가
    // 코어데이터에 저장한 후 코어데이터에 저장된 전체 트랙 목록 불러온다.
    func update(with track: Track) {
        isPlaying = true
        coreTrackAPI.create(with: track, isQueue: true)
        fetchFromCoreData()
    }
    
    // 새로운 트랙 리스트를 최근 재상한 큐에 추가
    // 셔플할 필요가 있는지 판단해서 저장
    func update(with tracks: [Track], isShuffled: Bool = false) {
        let mytracks = isShuffled ? tracks.shuffled() : tracks
        isPlaying = true
        manager.log(PlayerEvent.playlistPlayed(isShuffled))
        mytracks.forEach {
            coreTrackAPI.create(with: $0, isQueue: true)
        }
        fetchFromCoreData()
    }
    
    func changeCurrentTrackInQueue(to track: Track) {
        currentTrack = track
        isPlaying = true
    }
    
    func playNextTrack() {
        guard let nextIndex = getOptionalNextIndex() else { return }
        currentTrack = queue[nextIndex]
        isPlaying = true
    }
    
    func playPreviousTrack() {
        guard let previousIndex = getOptionalPreviousIndex() else { return }
        currentTrack = queue[previousIndex]
        isPlaying = true
    }
    
    func reorder(from source: IndexSet, to destination: Int) {
        queue.move(fromOffsets: source, toOffset: destination)
    }
    
    func didToggleDeleteAccessory(id: Int) {
        queue = queue.filter {
            $0.id != id
        }
        if currentTrack?.id == id {
            currentTrack = queue.last
        }
        coreTrackAPI.delete(id: id)
    }
    
    // 코어데이터로부터 최근 재상한 큐에 포함될 트랙 목록을 불러옴
    private func fetchFromCoreData() {
        let predicate = NSPredicate(format: "isQueue == %d", true)
        let coreTracks = coreTrackAPI.fetch(predicate: predicate)
        self.queue = coreTracks.map { Track(from: $0) }
        currentTrack = queue.last
    }
    
    private func safeAppend(_ track: Track) {
        if queue.contains(where: {$0.id == track.id}) {
            queue.removeAll(where: {$0.id == track.id})
        }
        queue.append(track)
    }
    
    @objc func changeRemainingTime() {
        timeRemaining -= 1
    }
    
    private func checkVolume() {
        if self.volumeChangeAmount >= 3 {
            self.manager.log(PlayerEvent.volumeChanged)
        }
        self.volumeChangeAmount = 0
    }
    
    private func getOptionalNextIndex() -> Int? {
        guard let currentTrackIndex = currentTrackIndex else { return nil }
        if currentTrackIndex == queue.count - 1 {
            return nil
        } else {
            return queue.index(after: currentTrackIndex)
        }
    }
    
    private func getOptionalPreviousIndex() -> Int? {
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
        repeatSubscription()
        timeSubscription()
        queueSubscription()
    }
    
    private func setupVolumeListener() {
        do {
            try session.setActive(true, options: .notifyOthersOnDeactivation)
        } catch {
            print("cannot activate session")
        }
        progressObserver = session.observe(\.outputVolume) { [weak self] (_, _) in
            self?.volumeChangeAmount += 1
        }
    }
    
    private func setupTimer(isPlaying: Bool) {
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
    
    private func trackPlayingSubscription() {
        $isPlaying
            .sink { [weak self] isPlaying in
                self?.isFavorite = false
                if let id = self?.currentTrack?.id {
                    if isPlaying {
                        self?.manager.log(PlayerEvent.trackPlayed(id))
                    } else {
                        self?.manager.log(PlayerEvent.trackPaused(id))
                    }
                    self?.setupTimer(isPlaying: isPlaying)
                }
            }
            .store(in: &cancellables)
    }
    
    private func shuffleSubscription() {
        $isShuffle
            .sink { [weak self] isShuffle in
                if self?.isInitial == false {
                    self?.manager.log(PlayerEvent.shuffle(isShuffle))
                }
            }
            .store(in: &cancellables)
    }
    
    private func repeatSubscription() {
        $isRepeat
            .sink { [weak self] isRepeat in
                if self?.isInitial == false {
                    self?.manager.log(PlayerEvent.repeat(isRepeat))
                }
            }
            .store(in: &cancellables)
    }
    
    private func timeSubscription() {
        $timeRemaining
            .sink { [weak self] timeRemaining in
                if timeRemaining <= 0 {
                    self?.timer?.invalidate()
                    self?.checkVolume()
                }
            }
            .store(in: &cancellables)
    }
    
    private func queueSubscription() {
        $queue
            .sink { [weak self] tracks in
                if tracks.isEmpty {
                    self?.closePlayerView?()
                }
            }
            .store(in: &cancellables)
    }
    
}
