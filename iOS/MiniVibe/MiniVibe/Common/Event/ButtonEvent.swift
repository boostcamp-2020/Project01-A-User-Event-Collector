//
//  ButtonEvent.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/09.
//

import Foundation

struct ButtonEvent: AnalyticsEvent {
    var name: String
    var createdAt: Date?
    var metadata: [String: String]?
    
    private init(name: String, createdAt: Date? = nil, metadata: [String: String]? = nil) {
        self.name = name
        self.createdAt = createdAt
        self.metadata = metadata
    }
    
    static let magazineTouched = ButtonEvent(name: "magazineTouched")
    
    static let genreTouched = ButtonEvent(name: "genreTouched")

}
