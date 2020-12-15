//
//  Album.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/30.
//

import Foundation

struct Album: Codable, Identifiable, Cellable {
    let id: Int?
    var name: String
    let description: String?
    let cover: String?
    let coverData: Data?
    let artistID: Int?
    let artist: Artist?
    
    enum CodingKeys: String, CodingKey {
        case id, description, coverData
        case name = "albumName"
        case cover
        case artistID = "artistId"
        case artist = "Artists"
    }
}

extension Album {
    
    init(from coreAlbum: CoreAlbum) {
        self.id = Int(coreAlbum.id)
        self.name = coreAlbum.name ?? ""
        self.description = coreAlbum.descript ?? ""
        self.cover = nil
        self.coverData = coreAlbum.cover
        self.artistID = nil
        self.artist = nil
    }
}
