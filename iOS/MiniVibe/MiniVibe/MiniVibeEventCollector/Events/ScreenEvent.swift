//
//  ScreenEvent.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/06.
//

import Foundation
import DiveEventCollector

struct ScreenEvent: Event {
    var name: String
    var createdAt: String?
    var metadata: [String: String]?
    
    enum ScreenType: String {
        case today, chart, search, library
        case playlist, magazine
        case thumbnailList
        case djStationList
        case searchBefore, searchAfter
        case error
    }
    
    private init(name: String, metadata: [String: String]? = nil) {
        self.name = name
        self.createdAt = Date().convertToStringForWeb()
        self.metadata = metadata
    }

    static func screenViewed(_ type: ScreenType) -> ScreenEvent {
        return ScreenEvent(name: "\(type)Viewed")
    }
    
    static func screenViewedWithSource(_ type: ScreenType, source: ScreenType) -> ScreenEvent {
        return ScreenEvent(name: "\(type)Viewed", metadata: ["from": "\(source)"])
    }
    
    //재생 화면은 좀 더 신경 써야해서 따로 빼놨습니다.
    static let playerPushed = ScreenEvent(name: "playerPushed")

    static let playerPopped = ScreenEvent(name: "playerPopped")
    
}
