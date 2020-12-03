//
//  Playlist.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/30.
//

import Foundation

struct Playlist: Thumbnailable, Codable {
    var id: Int
    var name, description: String
    var cover: String?
    let author: Int
    let user: User?
    let tracks: [Track]?

    enum CodingKeys: String, CodingKey {
        case id, description, cover, author
        case name = "playlistName"
        case tracks = "Tracks"
        case user = "users"
    }
}

// MARK: - API response를 위한 모델
struct PlayListReponse: Codable {
    let playlist: Playlist

    enum CodingKeys: String, CodingKey {
        case playlist = "Playlists"
    }
}

struct Playlists: Codable {
    let playlists: [Playlist]
    enum CodingKeys: String, CodingKey {
        case playlists = "Playlists"
    }
}
