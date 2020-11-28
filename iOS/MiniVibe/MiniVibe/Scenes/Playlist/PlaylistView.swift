//
//  PlaylistView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/28.
//

import SwiftUI

struct PlaylistView: View {
    private let playlist = Playlist(id: 1, title: "Dynamite", imageUrl: "Dynamite", description: "아무 생각 없이 드라이브하며 기분전환 어쩌고 저쩌고 dkdkdkdkdk", createdAt: "어제 어쩌고", author: "VIBE")
    
    
    
    var body: some View {
        VStack {
            TrackListHeaderView(playlist: playlist)
            TrackListButtonView()
            TrackListView(id: 1)
        }.padding()
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .principal) {
                VStack {
                    Text(playlist.title)
                        .modifier(Title2())
                    if let author = playlist.author {
                        Text(author)
                            .modifier(Description2())
                    }
                }
            }
        }
    }
}

struct PlaylistView_Previews: PreviewProvider {
    static var previews: some View {
        PlaylistView()
            .preferredColorScheme(.dark)
    }
}
