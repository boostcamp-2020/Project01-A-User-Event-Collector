//
//  AnalyticsEngine.swift
//  TodoApp
//
//  Created by 강병민 on 2020/12/06.
//

import Foundation

protocol AnalyticsEngine: AnalyticsPostEngine {
    func fetch() -> [BaseEvent]
}

protocol AnalyticsPostEngine: class {
    func send<T: AnalyticsEvent>(_ event: T)
}

