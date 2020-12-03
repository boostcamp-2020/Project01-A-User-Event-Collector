//
//  Artist.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/30.
//

import Foundation

struct Artist: Codable, Identifiable, Cellable {
    let id: Int
    var name: String
    let cover: String?
    
    enum CodingKeys: String, CodingKey {
        case id
        case name = "artistName"
        case cover
    }
}
