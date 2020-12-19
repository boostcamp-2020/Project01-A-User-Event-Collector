//
//  ButtonEvent.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/09.
//

import Foundation

struct ButtonEvent: AnalyticsEvent {
    var name: String
    var createdAt: String?
    var metadata: [String: String]?
        
    private init(name: String, metadata: [String: String]? = nil) {
        self.name = name
        self.createdAt = Date().convertToStringForWeb()
        self.metadata = metadata
    }
    
    static let magazineTouched = ButtonEvent(name: "magazineTouched")
    static let genreTouched = ButtonEvent(name: "genreTouched")
    static let newsTouched = ButtonEvent(name: "newsTouched")
    static let djStationTouched = ButtonEvent(name: "djStationTouched")

}
