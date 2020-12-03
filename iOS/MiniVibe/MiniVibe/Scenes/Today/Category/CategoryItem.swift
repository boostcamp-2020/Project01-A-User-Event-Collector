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
        self.id = magazine.id
        self.imageName = magazine.cover
        self.title = nil
        self.author = nil
        self.description = nil
    }
}

extension CategoryItem {
    init(playlist: Playlist, type: MiniVibeType) {
        self.id = playlist.id
        self.imageName = playlist.cover
        self.title = playlist.name
        self.author = playlist.user?.name
        switch type {
        case .recommendations:
            self.description = playlist.description
        default:
            self.description = nil
        }
    }
}

extension CategoryItem {
    //init이 필요할때는
}
