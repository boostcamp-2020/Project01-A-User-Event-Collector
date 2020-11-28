//
//  PlaylistListViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

class PlaylistListViewModel: ObservableObject {
    @Published var playlistList = [Playlist]()
    
    static let favoritePlaylistItems: [CategoryCell] =
        [.init(id: 1, imageName: "favorite1", title: "잠못드는 밤", description: "VIBE"),
         .init(id: 2, imageName: "favorite2", title: "Kanye West 대표곡", description: "내가 만든 플레이리스트"),
         .init(id: 4, imageName: "favorite3", title: "Avicii 대표곡", description: "VIBE"),
        ]
    static let recomendPlaylistItems: [CategoryCell] =
        [.init(id: 1, imageName: "recommend1", title: "올림픽대로", description: "VIBE"),
         .init(id: 2, imageName: "recommend2", title: "하우스 파티", description: "VIBE"),
         .init(id: 4, imageName: "recommend3", title: "꿀 떨어지는 R&B", description: "VIBE"),
        ]

    func fetchPlaylistList(type: PlaylistRoutingStarter, id: Int) {
        let playlist1 = Playlist(id: 1, title: "잠못드는 밤", imageUrl: "favorite1", description: nil, createdAt: "2020-10-11", author: nil)
        let playlist2 = Playlist(id: 2, title: "Kanye West 대표곡", imageUrl: "favorite2", description: nil, createdAt: "2020-10-11", author: nil)
        let playlist3 = Playlist(id: 3, title: "Avicii 대표곡", imageUrl: "favorite3", description: nil, createdAt: "2020-10-11", author: nil)
        let playlist4 = Playlist(id: 4, title: "올림픽대로", imageUrl: "recommend1", description: nil, createdAt: "2020-10-11", author: nil)
        let playlist5 = Playlist(id: 5, title: "하우스 파티", imageUrl: "recommend2", description: nil, createdAt: "2020-10-11", author: nil)
        let playlist6 = Playlist(id: 6, title: "꿀 떨어지는 R&B", imageUrl: "recommend3", description: nil, createdAt: "2020-10-11", author: nil)
        let playlistList = [playlist1, playlist2, playlist3, playlist4, playlist5, playlist6]
            self.playlistList = playlistList
    }
}
