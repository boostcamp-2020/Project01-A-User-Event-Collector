//
//  MiniVibeType.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/02.
//

import Foundation

enum MiniVibeType {
    case magazines, playlists, favorites, recommendations
    case djStations
    case albums
    case tracks
    case search
    case log
    
    func networkPath() -> String? {
        switch self {
        case .magazines:
            return "magazines"
        case .playlists:
            return "playlists"
        case .albums:
            return "albums"
        case .djStations:
            return "dj-stations"
        case .favorites:
            return "playlists?filter=9"
        case .recommendations:
            return "playlists?filter=1"
        case .search:
            return "search"
        case .tracks:
            return nil
        case .log:
            return "log/ios"
        }
    }
    
    func title() -> String? {
        switch self {
        case .magazines:
            return "VIBE MAG"
        case .playlists:
            return nil
        case .albums:
            return "앨범"
        case .djStations:
            return "스테이션"
        case .favorites:
            return "즐겨듣는 플레이리스트"
        case .recommendations:
            return "VIBE 추천 플레이리스트"
        case .search:
            return "검색"
        case .tracks:
            return "노래"
        default:
            return ""
        }
    }
}
