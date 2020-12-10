//
//  AnalyticsManager.swift
//  TodoApp
//
//  Created by 강병민 on 2020/12/06.
//

import Foundation

class AnalyticsManager {
    private var currentEngine: AnalyticsEngine?
    private let serverEngine: AnalyticsEngine
    private let backupEngine = BackupAnalyticsEngine()
    
    init(engine: AnalyticsEngine) {
        self.serverEngine = engine
        try? addReachabilityObserver()
        setupEngine()
    }
    
    deinit {
        removeReachabilityObserver()
    }
    
    private func setupEngine() {
        switch getConnection() {
        case .unavailable:
            currentEngine = backupEngine
            print("init engine: backup")
        default:
            currentEngine = serverEngine
            print("init engine: server")
        }
    }
    
    func log<T: AnalyticsEvent>(_ event: T) {
        guard let currentEngine = currentEngine else { return }
        currentEngine.sendAnalyticsEvent(event)
    }
    
    private func switchToServerEngine() {
        if currentEngine !== serverEngine {
            print("switchToServerEngine")
            //TODO: Core Data에 쌓인 이벤트 로그 서버에 보내기
            currentEngine = serverEngine
        }
    }
    
    private func switchToBackupEngine() {
        if currentEngine !== backupEngine {
            print("switchToBackupEngine")
            currentEngine = backupEngine
        }
    }
    
}

extension AnalyticsManager: ReachabilityObserverDelegate {
    
    internal func reachabilityChanged(_ isReachable: Bool) {
        if isReachable {
            switchToServerEngine()
        } else {
            switchToBackupEngine()
        }
    }
    
}
