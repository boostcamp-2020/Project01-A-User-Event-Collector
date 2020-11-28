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
                Image(playlist.imageUrl)
                    .resizable()
                    .frame(width: 130, height: 130)
                VStack(alignment: .leading) {
                    Text(playlist.title)
                        .modifier(Title1())
                    if let author = playlist.author {
                        Text(author)
                            .modifier(Description1())
                    }
                }
            }
            VStack(alignment: .leading) {
                if let createdAt = playlist.createdAt {
                    Text(createdAt)
                        .modifier(Title2())
                }
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
        TrackListHeaderView(playlist: Playlist(id: 1, title: "Dynamite", imageUrl: "Dynamite", description: "아무 생각 없이 드라이브하며 기분전환 어쩌고 저쩌고 dkdkdkdkdk", createdAt: "어제 어쩌고", author: "VIBE"))
            .preferredColorScheme(.dark)
    }
}
