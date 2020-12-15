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
    let albumTrackNumber: Int
    let albumID: Int?
    let album: Album?
    let artists: [Artist]?
    var liked: Bool?
    
    var artist: String {
        artists?.first?.name ?? ""
    }
    var coverURLString: String? {
        album?.cover
    }
    var coverData: Data? {
        album?.coverData
    }
    
    enum CodingKeys: String, CodingKey {
        case id, albumTrackNumber
        case name = "trackName"
        case albumID = "albumId"
        case album = "Albums"
        case artists = "Artists"
        case liked = "Liked"
    }
}

extension Track {
    
    init(from coreTrack: CoreTrack) {
        self.id = Int(coreTrack.id)
        self.name = coreTrack.name ?? ""
        self.albumTrackNumber = Int(coreTrack.albumTrackNumber)
        if let coreAlbum = coreTrack.album {
            let album = Album(from: coreAlbum)
            self.album = album
            self.albumID = Int(id)
        } else {
            self.album = nil
            self.albumID = nil
        }
        if let coreArtists = coreTrack.artists {
            var artists = [Artist]()
            coreArtists.forEach { coreArtist in
                if let coreArtist = coreArtist as? CoreArtist {
                    let artist = Artist(from: coreArtist)
                    artists.append(artist)
                }
            }
            self.artists = artists
        } else {
            self.artists = nil
        }
        self.liked = coreTrack.isFavorite
    }
}
