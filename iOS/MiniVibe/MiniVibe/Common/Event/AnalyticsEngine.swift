//
//  AnalyticsEngine.swift
//  TodoApp
//
//  Created by 강병민 on 2020/12/06.
//

import Foundation

protocol AnalyticsEngine: class {
    func sendAnalyticsEvent(named name: String, metadata: [String: String])
}

class MockAnalyticsEngine: AnalyticsEngine {

    func sendAnalyticsEvent(named name: String, metadata: [String: String]) {
        print("\(name)")
        metadata.forEach { key, value in
            print("ㄴ \(key) : \(value)")
        }
    }
    
}
