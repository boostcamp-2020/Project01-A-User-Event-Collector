//
//  SearchAfterCategoryView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/02.
//

import SwiftUI

struct SearchAfterCategoryView: View {
    private let maxCountOfTracks = 3
    private let type: CategoryType
    private let cellDatas: [Cellable]
    
    init(type: CategoryType, cellDatas: [Cellable]) {
        self.type = type
        self.cellDatas = cellDatas
    }
    
    enum CategoryType: String {
        case track = "노래"
        case album = "앨범"
        case artist = "아티스트"
    }
    var body: some View {
        VStack {
            HStack {
                Text(type.rawValue)
                    .modifier(Title1())
                Spacer()
            }
            if let tracks = cellDatas as? [Track] {
                ForEach(tracks.prefix(maxCountOfTracks)) { track in
                    TrackCellView(hasHeartAccessory: true, track: track)
                }
            }
            if let albums = cellDatas as? [Album] {
                ForEach(albums.prefix(maxCountOfTracks)) { album in
                    BasicRowCellView(title: album.name,
                                     subTitle: nil,
                                     coverURLString: album.cover,
                                     coverData: album.coverData)
                }
            }
            if let artists = cellDatas as? [Artist] {
                ForEach(artists.prefix(maxCountOfTracks)) { artist in
                    BasicRowCellView(title: artist.name,
                                     subTitle: nil,
                                     coverURLString: artist.cover,
                                     coverData: artist.coverData)
                }
            }
        }
    }
}

struct SearchAfterCategoryView_Previews: PreviewProvider {
    static var previews: some View {
        SearchAfterCategoryView(type: .album, cellDatas: TestData.playlist.tracks!)
    }
}
