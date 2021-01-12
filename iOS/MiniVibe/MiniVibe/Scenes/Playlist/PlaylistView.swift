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
              let tracks = playlist.tracks else {
            return AnyView(EmptyView()
                            .onAppear {
                                withAnimation { [weak viewModel = self.viewModel] in
                                    viewModel?.fetch(id: playlistID)
                                }
                            }
                            .navigationBarTitleDisplayMode(.inline))}
        
        return AnyView(
            ScrollView(showsIndicators: false) {
                LazyVGrid(columns: layout,
                          spacing: 20,
                          pinnedViews: [.sectionHeaders]) {
                    TrackListHeaderView(playlist: playlist)
                    TrackListView(tracks: tracks)
                }
            }.padding()
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .principal) {
                    if let name = playlist.name {
                        Text(name)
                            .modifier(Title2())
                            .transition(.slide)
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
