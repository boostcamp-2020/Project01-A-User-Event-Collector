//
//  Album.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/30.
//

import Foundation

struct Album: Codable {
    let id: Int
    let name, description: String
    let cover: String?

    enum CodingKeys: String, CodingKey {
        case id, description
        case name = "albumName"
        case cover
    }
}
