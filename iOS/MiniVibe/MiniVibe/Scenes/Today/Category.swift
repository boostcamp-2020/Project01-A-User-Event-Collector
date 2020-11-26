//
//  Category.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import Foundation

enum CategoryType {
    case track, playlist, magazine, station
}

enum CategoryMode {
    case full, half
}

struct Category: Identifiable {
    let id = UUID()
    let title: String
    let items: [CategoryItem] = [.init(id: 1, imageName: "aa", title: nil, description: nil),
                                 .init(id: 2, imageName: "bb", title: nil, description: nil),
                                 .init(id: 3, imageName: "cc", title: nil, description: nil),
                                 .init(id: 4, imageName: "ddd", title: nil, description: nil)]
    let type: CategoryType
    let mode: CategoryMode
}
