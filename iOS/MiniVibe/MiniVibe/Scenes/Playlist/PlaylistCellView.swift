//
//  PlaylistCellView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/23.
//

import SwiftUI

struct PlaylistCellView: View {
    @Binding var playlist: Playlist
    
    var body: some View {
        HStack(spacing: 20) {
            Image(playlist.cover ?? "logo")
                .resizable()
                .frame(width: 90, height: 90)
            VStack(alignment: .leading, spacing: 5) {
                Text(playlist.name)
                    .modifier(Title2())
                if let description = playlist.description {
                    Text(description)
                        .modifier(Description2())
                        .padding(.bottom, 2)
                }
//                if let date = playlist.createdAt {
//                    Text(date)
//                        .modifier(Description2())
//                }
                if let author = playlist.user.username {
                    Text(author)
                        .modifier(Description2())
                }
            }
        }.padding(.top)
    }
}
