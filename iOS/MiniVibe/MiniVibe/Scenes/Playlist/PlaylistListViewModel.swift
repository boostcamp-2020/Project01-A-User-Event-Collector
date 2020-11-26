//
//  PlaylistListViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

class PlaylistListViewModel: ObservableObject {
    @Published var playlistList = [Playlist]()
    let navigationType: PlaylistRouter
    
    init(navigationType: PlaylistRouter) {
        self.navigationType = navigationType
    }
    
    func fetchPlaylistList() {
        let playlist1 = Playlist(id: 1, title: "나만 없어 그 한정판 LP 레코드", imageUrl: "hi", description: "플로피 디스크 모양의 저장 버튼처럼 상식적 존재가 될 것 같았던 LP 레코드가 다시 규모로는 작아도 열기로는 큰 존재가 되고 있다.", createdAt: "2020-10-11", author: nil)
        let playlist2 = Playlist(id: 2, title: "나만 없어 그 한정판 LP 레코드", imageUrl: "hi", description: "플로피 디스크 모양의 저장 버튼처럼 상식적 존재가 될 것 같았던 LP 레코드가 다시 규모로는 작아도 열기로는 큰 존재가 되고 있다.", createdAt: "2020-10-11", author: nil)
        let playlist3 = Playlist(id: 3, title: "나만 없어 그 한정판 LP 레코드", imageUrl: "hi", description: "플로피 디스크 모양의 저장 버튼처럼 상식적 존재가 될 것 같았던 LP 레코드가 다시 규모로는 작아도 열기로는 큰 존재가 되고 있다.", createdAt: "2020-10-11", author: nil)
        let playlist4 = Playlist(id: 4, title: "나만 없어 그 한정판 LP 레코드", imageUrl: "hi", description: "플로피 디스크 모양의 저장 버튼처럼 상식적 존재가 될 것 같았던 LP 레코드가 다시 규모로는 작아도 열기로는 큰 존재가 되고 있다.", createdAt: "2020-10-11", author: nil)
        let playlist5 = Playlist(id: 5, title: "나만 없어 그 한정판 LP 레코드", imageUrl: "hi", description: "플로피 디스크 모양의 저장 버튼처럼 상식적 존재가 될 것 같았던 LP 레코드가 다시 규모로는 작아도 열기로는 큰 존재가 되고 있다.", createdAt: "2020-10-11", author: nil)
        let playlist6 = Playlist(id: 6, title: "나만 없어 그 한정판 LP 레코드", imageUrl: "hi", description: "플로피 디스크 모양의 저장 버튼처럼 상식적 존재가 될 것 같았던 LP 레코드가 다시 규모로는 작아도 열기로는 큰 존재가 되고 있다.", createdAt: "2020-10-11", author: nil)
        let playlistList = [playlist1, playlist2, playlist3, playlist4, playlist5, playlist6]
            self.playlistList = playlistList
    }
}
