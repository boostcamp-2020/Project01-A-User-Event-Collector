//
//  MockAnalyticsEngine.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/15.
//

import Foundation

public final class MockServerEngine: EventSendable {
    public func send<T: AnalyticsEvent>(_ event: T) {
        print("MockServer - \(event.name)")
        event.metadata?.forEach { key, value in
            print("ㄴ \(key) : \(value)")
        }
    }
}
