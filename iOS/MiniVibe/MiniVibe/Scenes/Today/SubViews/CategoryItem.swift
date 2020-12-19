//
//  CategoryCell.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import Foundation

struct CategoryItem: Identifiable {
    let id: Int
    let imageName: String?
    let title: String?
    let author: String?
    let description: String?
}

extension CategoryItem {
    init(magazine: Magazine) {
        id = magazine.id
        imageName = magazine.cover
        title = nil
        author = nil
        description = nil
    }
}

extension CategoryItem {
    init(playlist: Playlist, type: MiniVibeType) {
        id = playlist.id
        imageName = playlist.cover
        title = playlist.name
        author = playlist.user?.name
        switch type {
        case .recommendations:
            description = playlist.description
        default:
            description = nil
        }
    }
}

extension CategoryItem {
    init(station: DJStation) {
        id = station.id
        imageName = station.cover
        title = nil
        author = nil
        description = nil
    }
}
