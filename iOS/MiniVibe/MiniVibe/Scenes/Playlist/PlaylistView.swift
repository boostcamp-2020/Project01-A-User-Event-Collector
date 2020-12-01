//
//  PlaylistView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/28.
//

import SwiftUI

struct PlaylistView: View {
    private let playlist = TestData.playlist
    private let trackListId: Int = 1
    private let layout = [GridItem(.flexible())]
    
//    init(playlist: Playlist, trackListId: Int) {
//        self.playlist = playlist
//        self.trackListId = trackListId
//    }
    
    var body: some View {
        ScrollView(showsIndicators: false) {
            LazyVGrid(columns: layout,
                      spacing: 20,
                      pinnedViews: [.sectionHeaders]) {
                TrackListHeaderView(playlist: playlist)
                Section(header: TrackListButtonView()) {
                    TrackListView(id: trackListId)
                }
            }
        }.padding()
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .principal) {
                VStack {
                    Text(playlist.name)
                        .modifier(Title2())
                    if let author = playlist.user.username {
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
