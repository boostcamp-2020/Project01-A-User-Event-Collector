//
//  Event.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/06.
//

import Foundation

protocol AnalyticsEvent {
    var name: String { get }
    var metadata: [String: String] { get }
}
