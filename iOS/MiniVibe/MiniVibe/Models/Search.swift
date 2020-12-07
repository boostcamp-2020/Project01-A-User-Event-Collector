//
//  Search.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/03.
//

import Foundation

struct Search: Codable {
    let albums: [Album]?
    let tracks: [Track]?
    let artists: [Artist]?
    
    enum CodingKeys: String, CodingKey {
        case albums = "Albums"
        case tracks = "Tracks"
        case artists = "Artists"
    }
}
