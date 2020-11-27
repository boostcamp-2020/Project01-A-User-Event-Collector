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
    let items: [CategoryItem]
    let type: CategoryType
    let mode: CategoryMode
}
