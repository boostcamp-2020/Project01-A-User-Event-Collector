//
//  ThumbnailCellView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/23.
//

import SwiftUI

struct ThumbnailCellView: View {
    private let thumbnail: Thumbnailable
    
    init(thumbnail: Thumbnailable) {
        self.thumbnail = thumbnail
    }
        
    var body: some View {
        HStack(spacing: 20) {
            URLImage(urlString: thumbnail.cover)
                .frame(width: 90, height: 90)
            VStack(alignment: .leading, spacing: 5) {
                Text(thumbnail.name)
                    .modifier(Title2())
                Text(thumbnail.description)
                    .modifier(Description2())
                    .padding(.bottom, 2)
                if let magazine = thumbnail as? Magazine,
                   let date = magazine.createdAt {
                    Text(date)
                        .modifier(Description2())
                }
                if let playlist = thumbnail as? Playlist,
                   let author = playlist.user?.name {
                    Text(author)
                        .modifier(Description2())
                }
            }
            Spacer()
        }
        .padding(.top)
    }
}
