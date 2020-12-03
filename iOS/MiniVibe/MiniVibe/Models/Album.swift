//
//  Album.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/30.
//

import Foundation

struct Album: Codable, Identifiable, Cellable {
    let id: Int
    var name: String
    let description: String
    let cover: String?

    enum CodingKeys: String, CodingKey {
        case id, description
        case name = "albumName"
        case cover
    }
}
