//
//  Track.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/30.
//

import Foundation

struct Track: Codable, Identifiable {
    let id: Int
    let trackName: String
    let albumTrackNumber, albumID: Int
    let album: Album
    let artists: [Artist]

    enum CodingKeys: String, CodingKey {
        case id, trackName, albumTrackNumber
        case albumID = "albumId"
        case album = "Albums"
        case artists = "Artists"
    }
}
