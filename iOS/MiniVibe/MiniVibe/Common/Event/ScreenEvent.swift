//
//  ScreenEvent.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/06.
//

import Foundation

struct ScreenEvent: AnalyticsEvent {
    var name: String
    var metadata: [String: String]
    
    enum ScreenType: String {
        case today, chart, search
    }
    
    private init(name: String, metadata: [String: String] = [:]) {
        self.name = name
        self.metadata = metadata
    }

    static func screenViewed(_ type: ScreenType) -> ScreenEvent {
        return ScreenEvent(name: "\(type)Viewed")
    }
    
}
