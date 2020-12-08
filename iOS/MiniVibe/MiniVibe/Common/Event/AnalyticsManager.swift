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
    
    func setupEngine() {
        switch getConnection() {
        case .unavailable:
            currentEngine = backupEngine
            print("init engine: backup")
        default:
            currentEngine = serverEngine
            print("init engine: server")
        }
    }
    
    func log(_ event: AnalyticsEvent) {
        guard let currentEngine = currentEngine else { return }
        currentEngine.sendAnalyticsEvent(named: event.name, metadata: event.metadata)
    }
    
    func switchToServerEngine() {
        //TODO: Core Data에 쌓인 이벤트 로그 서버에 보내기
        currentEngine = serverEngine
    }
    
    func switchToBackupEngine() {
        currentEngine = backupEngine
    }
    
}

extension AnalyticsManager: ReachabilityObserverDelegate {
    
    func reachabilityChanged(_ isReachable: Bool) {
        if isReachable {
            print("switchToServerEngine")
            switchToServerEngine()
        } else {
            print("switchToBackupEngine")
            switchToBackupEngine()
        }
    }
    
}
