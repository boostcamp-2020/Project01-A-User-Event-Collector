//
//  Magazine.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/01.
//

import Foundation

protocol Thumbnailable {
    var id: Int { get set }
    var name: String { get set }
    var description: String { get set }
    var cover: String? { get set }
}

struct Magazine: Thumbnailable, Codable {
    var id: Int
    var name, description: String
    var cover: String?
    let playlistID: Int
    let tracks: [Track]?
    let createdAt, type: String
    enum CodingKeys: String, CodingKey {
        case id
        case name = "magazineName"
        case type = "magazineType"
        case cover
        case description
        case createdAt
        case playlistID = "playlistId"
        case tracks = "Tracks"
    }
}

// MARK: - API response를 위한 모델
struct MagazineReponse: Codable {
    let magazine: Magazine
    enum CodingKeys: String, CodingKey {
        case magazine = "Magzines"
    }
}

struct Magazines: Codable {
    let magazines: [Magazine]
    enum CodingKeys: String, CodingKey {
        case magazines = "Magazines"
    }
}
