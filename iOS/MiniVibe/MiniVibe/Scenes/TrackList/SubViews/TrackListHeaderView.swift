//
//  TrackListHeaderView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/28.
//

import SwiftUI

struct TrackListHeaderView: View {
    let playlist: Playlist
    
    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            HStack(alignment: .top, spacing: 20) {
                AsyncImage(url: URL(string: playlist.cover ?? ""))
                    .frame(width: 130, height: 130)
                VStack(alignment: .leading) {
                    Text(playlist.name)
                        .modifier(Title1())
                    if let author = playlist.user?.name {
                        Text(author)
                            .modifier(Description1())
                    }
                }
                Spacer()
            }
            VStack(alignment: .leading) {
//                if let createdAt = playlist.createdAt {
//                    Text(createdAt)
//                        .modifier(Title2())
//                }
                if let description = playlist.description {
                    Text(description)
                        .modifier(Description2())
                }
            }
        }
    }
}

struct TrackListHeaderView_Previews: PreviewProvider {
    static var previews: some View {
        TrackListHeaderView(playlist: TestData.playlist)
            .preferredColorScheme(.dark)
    }
}
