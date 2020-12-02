//
//  PlaylistView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/28.
//

import SwiftUI

struct PlaylistView: View {
    @StateObject private var viewModel = PlaylistViewModel()
    
    private let playlistID: Int
    private let layout = [GridItem(.flexible())]
    
    init(playlistID: Int) {
        self.playlistID = playlistID
    }
    
    var body: some View {
        guard let playlist = viewModel.playlist,
              let tracks = playlist.tracks else { return AnyView(EmptyView().onAppear(perform: {
                viewModel.fetch(id: playlistID)
            }))
        }
        
        return AnyView(
            ScrollView(showsIndicators: false) {
                LazyVGrid(columns: layout,
                          spacing: 20,
                          pinnedViews: [.sectionHeaders]) {
                    TrackListHeaderView(playlist: playlist)
                    Section(header: TrackListButtonView()) {
                        TrackListView(tracks: tracks)
                    }
                }
            }.padding()
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .principal) {
                    VStack {
                        if let name = playlist.name {
                            Text(name)
                                .modifier(Title2())
                        }
                        if let author = playlist.user?.username {
                            Text(author)
                                .modifier(Description2())
                        }
                    }
                }
            }
        )
    }
}

struct PlaylistView_Previews: PreviewProvider {
    static var previews: some View {
        PlaylistView(playlistID: 1)
            .preferredColorScheme(.dark)
    }
}
