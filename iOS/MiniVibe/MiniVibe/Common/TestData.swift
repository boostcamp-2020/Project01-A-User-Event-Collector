//
//  TestData.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/30.
//

import Foundation

struct TestData {
    static let stationItems: [CategoryCell] =
        [.init(id: 1, imageName: "dj1", title: nil, description: nil),
         .init(id: 2, imageName: "dj2", title: nil, description: nil),
         .init(id: 3, imageName: "dj3", title: nil, description: nil),
         .init(id: 4, imageName: "dj4", title: nil, description: nil),
         .init(id: 5, imageName: "dj5", title: nil, description: nil),
        ]
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
    static let magazineItems: [CategoryCell] =
        [.init(id: 1, imageName: "magazine1", title: nil, description: nil),
         .init(id: 2, imageName: "magazine2", title: nil, description: nil),
         .init(id: 3, imageName: "magazine3", title: nil, description: nil),
         .init(id: 4, imageName: "magazine4", title: nil, description: nil),
         .init(id: 5, imageName: "magazine5", title: nil, description: nil),
        ]
    
    static let categories: [Category]
        = [.init(title: "DJ 스테이션",
                 items: stationItems,
                 type: .stations,
                 mode: .half),
           .init(title: "VIBE 추천 플레이리스트",
                 items: recomendPlaylistItems,
                 type: .playlists,
                 mode: .full),
           .init(title: "즐겨찾는 플레이리스트",
                 items: favoritePlaylistItems,
                 type: .playlists,
                 mode: .half),
           .init(title: "VIBE MAG",
                 items: magazineItems,
                 type: .magazines,
                 mode: .full),
        ]
    static let playlist
        = Playlist(id: 1,
                   name: "잠못드는 밤",
                   description: "울적한 기분에, 복잡한 머리에 쉽게 잠들지 못하는 밤. 부드러운 멜로디의 인디팝과 알앤비 음악이 불안한 마음을 달래줄 거예요.",
                   cover: "favorite1",
                   author: 1,
                   user: User(username: "VIBE"),
                   tracks: [
                    Track(id: 1,
                          trackName: "Dynamite",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 1,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "Dynamite"),
                          artists: [Artist.init(id: 1, name: "방탄소년단", cover: "BTS")]
                    ),
                    Track(id: 2,
                          trackName: "우산",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 1,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "우산"),
                          artists: [Artist.init(id: 1, name: "윤하", cover: "??")]
                    ),
                    Track(id: 3,
                          trackName: "Blueming",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 1,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "Blueming"),
                          artists: [Artist.init(id: 1, name: "아이유", cover: "??")]
                    ),
                    Track(id: 4,
                          trackName: "FeelGood",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 1,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "Blueming"),
                          artists: [Artist.init(id: 1, name: "프로미스나인", cover: "??")]
                    ),
                    Track(id: 5,
                          trackName: "LoveSick Girls",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 1,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "LoveSick Girls"),
                          artists: [Artist.init(id: 1, name: "블랙핑크", cover: "??")]
                    ),
                    Track(id: 6,
                          trackName: "Fake Love",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 2,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "Dynamite"),
                          artists: [Artist.init(id: 1, name: "방탄소년단", cover: "BTS")]
                    ),
                    Track(id: 7,
                          trackName: "빗소리",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 2,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "우산"),
                          artists: [Artist.init(id: 1, name: "윤하", cover: "??")]
                    ),
                    Track(id: 8,
                          trackName: "밤편지",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 2,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "Blueming"),
                          artists: [Artist.init(id: 1, name: "아이유", cover: "??")]
                    ),
                    Track(id: 9,
                          trackName: "물고기",
                          albumTrackNumber: 1,
                          albumID: 1,
                          album: Album.init(id: 2,
                                            name: "앨범 제목",
                                            description: "앨범 설명",
                                            cover: "Blueming"),
                          artists: [Artist.init(id: 1, name: "프로미스나인", cover: "??")]
                    ),
                    Track(id: 10,
                          trackName: "휘파람",
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
    
}
