//
//  BackupAnalyticsEngine.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/14.
//

import Foundation

class BackupAnalyticsEngine: AnalyticsEngine {
    
    let coreEventManager = CoreEventAPI()
    
    func send<T: AnalyticsEvent>(_ event: T) {
        coreEventManager.create(with: event)
    }
    
    func fetch() -> [BaseEvent] {
        let events = coreEventManager.fetchAll()
        coreEventManager.deleteAll()
        return events
    }
}
