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
    let coverData: Data?
    
    init(id: Int, name: String, cover: String?) {
        self.id = id
        self.name = name
        self.cover = cover
        self.coverData = nil
    }
    
    init(from coreArtist: CoreArtist) {
        self.id = Int(coreArtist.id)
        self.name = coreArtist.name ?? ""
        self.cover = nil
        self.coverData = coreArtist.cover
    }
    
    enum CodingKeys: String, CodingKey {
        case id
        case name = "artistName"
        case cover
        case coverData
    }
}
