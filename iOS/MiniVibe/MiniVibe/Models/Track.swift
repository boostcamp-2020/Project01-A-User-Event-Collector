//
//  Track.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/30.
//

import Foundation

protocol Cellable {
    var name: String { get set }
}

struct Track: Codable, Identifiable, Cellable {
    let id: Int
    var name: String
    let albumTrackNumber, albumID: Int
    let album: Album?
    let artists: [Artist]?

    enum CodingKeys: String, CodingKey {
        case id, albumTrackNumber
        case name = "trackName"
        case albumID = "albumId"
        case album = "Albums"
        case artists = "Artists"
    }
    
    var artist: String {
        artists?.first?.name ?? ""
    }
    var coverURLString: String? {
        album?.cover
    }
}
