//
//  Category.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import Foundation

enum CategoryMode {
    case full, half
}

struct Category: Identifiable {
    let id = UUID()
    let title: String
    let items: [CategoryItem]
    let type: MiniVibeType
    let mode: CategoryMode
}

extension Category {
    init(playlists : [Playlist], type: MiniVibeType, mode: CategoryMode) {
        self.title = type.title() ?? "DEFAULT"
        self.type = type
        self.mode = mode
        self.items = playlists.map { playlist -> CategoryItem in
            CategoryItem(playlist: playlist, type: type)
        }
    }
}

extension Category {
    init(magazines : [Magazine], mode: CategoryMode) {
        self.title = "VIBE MAG" ?? "DEFAULT"
        self.type = .magazines
        self.mode = mode
        self.items = magazines.map { magazine -> CategoryItem in
            CategoryItem(magazine: magazine)
        }
    }
}
