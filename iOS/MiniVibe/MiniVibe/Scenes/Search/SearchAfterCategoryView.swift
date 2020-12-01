//
//  SearchAfterCategoryView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/02.
//

import SwiftUI

struct SearchAfterCategoryView: View {
    private let type: CategoryType
    private let tracks: [Track]
    
    init(type: CategoryType, tracks: [Track]) {
        self.type = type
        self.tracks = tracks
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
            let n = tracks.count >= 3 ? 3 : tracks.count
            ForEach(tracks[0..<n]) { track in
                TrackCellView(track: track)
            }
        }
    }
}

struct SearchAfterCategoryView_Previews: PreviewProvider {
    static var previews: some View {
        SearchAfterCategoryView(type: .album, tracks: TestData.playlist.tracks!)
    }
}
