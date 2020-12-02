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
    let items: [CategoryCell]
    let type: MiniVibeType
    let mode: CategoryMode
}
