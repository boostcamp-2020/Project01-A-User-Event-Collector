//
//  TestData.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/30.
//

import Foundation

struct TestData {
//    static let stationItems: [CategoryItem] =
//        [.init(id: 1, imageName: "dj1", title: nil, description: nil),
//         .init(id: 2, imageName: "dj2", title: nil, description: nil),
//         .init(id: 3, imageName: "dj3", title: nil, description: nil),
//         .init(id: 4, imageName: "dj4", title: nil, description: nil),
//         .init(id: 5, imageName: "dj5", title: nil, description: nil),
//        ]
//    static let favoritePlaylistItems: [CategoryItem] =
//        [.init(id: 1, imageName: "favorite1", title: "잠못드는 밤", description: "VIBE"),
//         .init(id: 2, imageName: "favorite2", title: "Kanye West 대표곡", description: "내가 만든 플레이리스트"),
//         .init(id: 4, imageName: "favorite3", title: "Avicii 대표곡", description: "VIBE"),
//        ]
//    static let recomendPlaylistItems: [CategoryItem] =
//        [.init(id: 1, imageName: "recommend1", title: "올림픽대로", description: "VIBE"),
//         .init(id: 2, imageName: "recommend2", title: "하우스 파티", description: "VIBE"),
//         .init(id: 4, imageName: "recommend3", title: "꿀 떨어지는 R&B", description: "VIBE"),
//        ]
//    static let magazineItems: [CategoryItem] =
//        [.init(id: 1, imageName: "magazine1", title: nil, description: nil),
//         .init(id: 2, imageName: "magazine2", title: nil, description: nil),
//         .init(id: 3, imageName: "magazine3", title: nil, description: nil),
//         .init(id: 4, imageName: "magazine4", title: nil, description: nil),
//         .init(id: 5, imageName: "magazine5", title: nil, description: nil),
//        ]
    
//    static let categories: [Category]
//        = [.init(title: "DJ 스테이션",
//                 items: stationItems,
//                 type: .djStations,
//                 mode: .half),
//           .init(title: "VIBE 추천 플레이리스트",
//                 items: recomendPlaylistItems,
//                 type: .recommendations,
//                 mode: .full),
//           .init(title: "즐겨찾는 플레이리스트",
//                 items: favoritePlaylistItems,
//                 type: .favorites,
//                 mode: .half),
//           .init(title: "VIBE MAG",
//                 items: magazineItems,
//                 type: .magazines,
//                 mode: .full),
//        ]
    static let defaultTrack = Track(id: 37,
                                    name: "Dynamite (Instrumental)",
                                    albumTrackNumber: 2,
                                    albumID: 8,
                                    album: Album(id: 8,
                                                 name: "Dynamite",
                                                 description: "방탄",
                                                 cover: "https://musicmeta-phinf.pstatic.net/album/004/820/4820425.jpg?type=r360Fll&v=20200918130108"),
                                    artists: [Artist(id: 3, name: "방탄소년단", cover: nil)])
    
    static let playlist
        = Playlist(id: 1,
                   name: "잠못드는 밤",
                   description: "울적한 기분에, 복잡한 머리에 쉽게 잠들지 못하는 밤. 부드러운 멜로디의 인디팝과 알앤비 음악이 불안한 마음을 달래줄 거예요.",
                   cover: "favorite1",
                   author: 1,
                   user: User(name: "VIBE"),
                   tracks: [
                    Track(id: 1,
                          name: "Dynamite",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 1,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "Dynamite"),
                          artists: [Artist.init(id: 1, name: "방탄소년단", cover: "BTS")]
                    ),
                    Track(id: 2,
                          name: "우산",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 1,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "우산"),
                          artists: [Artist.init(id: 1, name: "윤하", cover: "??")]
                    ),
                    Track(id: 3,
                          name: "Blueming",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 1,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "Blueming"),
                          artists: [Artist.init(id: 1, name: "아이유", cover: "??")]
                    ),
                    Track(id: 4,
                          name: "FeelGood",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 1,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "Blueming"),
                          artists: [Artist.init(id: 1, name: "프로미스나인", cover: "??")]
                    ),
                    Track(id: 5,
                          name: "LoveSick Girls",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 1,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "LoveSick Girls"),
                          artists: [Artist.init(id: 1, name: "블랙핑크", cover: "??")]
                    ),
                    Track(id: 6,
                          name: "Fake Love",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 2,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "Dynamite"),
                          artists: [Artist.init(id: 1, name: "방탄소년단", cover: "BTS")]
                    ),
                    Track(id: 7,
                          name: "빗소리",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 2,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "우산"),
                          artists: [Artist.init(id: 1, name: "윤하", cover: "??")]
                    ),
                    Track(id: 8,
                          name: "밤편지",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 2,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "Blueming"),
                          artists: [Artist.init(id: 1, name: "아이유", cover: "??")]
                    ),
                    Track(id: 9,
                          name: "물고기",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 2,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "Blueming"),
                          artists: [Artist.init(id: 1, name: "프로미스나인", cover: "??")]
                    ),
                    Track(id: 10,
                          name: "휘파람",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 2,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "LoveSick Girls"),
                          artists: [Artist.init(id: 1, name: "블랙핑크", cover: "??")]
                    )
                    
                   ]
        )
    static let magazine = Magazine(id: 1,
                                   name: "나만 없어 그 한정판 LP 레코드",
                                   description: "발매되기 전부터 이토록 화제를 모은 앨범이 2020년에 또 있었을까. JYP를 나간 후 백예린이 발표한 앨범 <Every letter i sent you>는 발매 전부터 후까지 쉬지 않고 크고 작은 화제를 모았다. 음원으로 발표되지 않아 많은 사람들이 라이브,",
                                   cover: nil,
                                   playlistID: 1,
                                   tracks: [
                                    Track(id: 9,
                                          name: "물고기",
                                          albumTrackNumber: 1,
                                          albumID: 1,
                                          album: Album.init(id: 2,
                                                            name: "앨범 제목",
                                                            description: "앨범 설명",
                                                            cover: "Blueming"),
                                          artists: [Artist.init(id: 1, name: "프로미스나인", cover: "??")]
                                    )],
                                   createdAt: "2020년 10월",
                                   type: "PICK")
    
    static let categoryItem1 = CategoryItem(magazine: magazine)
    static let categoryItem2 = CategoryItem(playlist: playlist, type: .favorites)
    static let categoryItem3 = CategoryItem(playlist: playlist, type: .recommendations)
}
