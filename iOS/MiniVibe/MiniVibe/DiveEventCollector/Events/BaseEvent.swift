//
//  BaseEvent.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/15.
//

import Foundation

open class BaseEvent: AnalyticsEvent {
    public var name: String
    public var createdAt: String?
    public var metadata: [String: String]?
    
    init(name: String, createdAt: String?, metadata: [String: String]?) {
        self.name = name
        self.createdAt = createdAt
        self.metadata = metadata
    }
}
