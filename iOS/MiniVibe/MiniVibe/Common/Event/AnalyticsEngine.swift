//
//  AnalyticsEngine.swift
//  TodoApp
//
//  Created by 강병민 on 2020/12/06.
//

import Foundation

protocol AnalyticsEngine: class {
    func sendAnalyticsEvent<T: AnalyticsEvent>(_ event: T)
}

class MockAnalyticsEngine: AnalyticsEngine {
    func sendAnalyticsEvent<T: AnalyticsEvent>(_ event: T) {
        print("MockServer - \(event.name)")
        event.metadata?.forEach { key, value in
            print("ㄴ \(key) : \(value)")
        }
    }
}

class BackupAnalyticsEngine: AnalyticsEngine {
    func sendAnalyticsEvent<T: AnalyticsEvent>(_ event: T) {
        print("Backup - \(event.name)")
        event.metadata?.forEach { key, value in
            print("ㄴ \(key) : \(value)")
        }
    }
}
