//
//  Playlist.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/23.
//

import Foundation

struct Playlist: Identifiable {
    let id: Int
    let title: String
    let imageUrl: String
    let description: String?
    let createdAt: String?
    let author: String?
}
