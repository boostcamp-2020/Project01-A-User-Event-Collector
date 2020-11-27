//
//  Track.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/22.
//

import Foundation

struct Track: Identifiable {
    let id: Int
    let title: String
    let artist: String
    var isFavorite: Bool
}
