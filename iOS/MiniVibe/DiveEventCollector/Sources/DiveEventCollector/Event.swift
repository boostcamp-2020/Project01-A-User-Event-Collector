//
//  Event.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/06.
//

import Foundation

public protocol Event: Codable {
    var name: String { get }
    var createdAt: String? { get }
    var metadata: [String: String]? { get }
}
