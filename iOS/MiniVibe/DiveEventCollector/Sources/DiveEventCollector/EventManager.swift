//
//  AnalyticsManager.swift
//  TodoApp
//
//  Created by 강병민 on 2020/12/06.
//

import Foundation

public final class EventManager {
    private var currentEngine: EventSendable?
    private var mainEngine: EventSendable?
    private var backupEngine: EventSendableAndFetchable?
    private var alertEngine: EventSendable?
    
    public var isAlerting: Bool
    
    public init(serverEngine: EventSendable?,
                backupEngine: EventSendableAndFetchable?,
                alertEngine: EventSendable?,
                isAlerting: Bool = true) {
        self.mainEngine = serverEngine
        self.backupEngine = backupEngine
        self.alertEngine = alertEngine
        self.isAlerting = isAlerting
        
        try? addReachabilityObserver()
        setupEngine()
    }
    
    deinit {
        removeReachabilityObserver()
    }
    
    private func setupEngine() {
        currentEngine = backupEngine
        if backupEngine == nil {
            currentEngine = mainEngine
        }
    }
    
    public func log<T: Event>(_ event: T) {
        if isAlerting {
            alertEngine?.send(event)
        }
        guard let currentEngine = currentEngine else { return }
        currentEngine.send(event)
    }
    
    private func switchToServerEngine() {
        if currentEngine !== mainEngine {
            currentEngine = mainEngine
            guard let events = backupEngine?.fetch() else { return }
            events.forEach {
                currentEngine?.send($0)
            }
        }
    }
    
    private func switchToBackupEngine() {
        if currentEngine !== backupEngine {
            currentEngine = backupEngine
        }
    }
    
}

extension EventManager: ReachabilityObserverDelegate {
    
    internal func reachabilityChanged(_ isReachable: Bool) {
        if isReachable {
            switchToServerEngine()
        } else {
            switchToBackupEngine()
        }
    }
    
}
