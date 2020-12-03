//
//  PlaylistListView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

struct PlaylistListView: View {
    
    private let id: Int
    private let router: PlaylistRouter
    @StateObject private var viewModel = PlaylistListViewModel()
    
    init(id: Int, router: PlaylistRouter) {
        self.id = id
        self.router = router
    }
    
    var body: some View {
        List(viewModel.playlistList.indexed(), id: \.1.id) { index, playlist in
            NavigationLink(
                destination: TrackListView(id: playlist.id)
            ) {
                PlaylistCellView(playlist: $viewModel.playlistList[index])
            }
        }.modifier(NavigationBarStyle(title: router.title()))
        .onAppear {
            viewModel.fetchPlaylistList(type: router.routingStarter, id: id)
        }
    }
}

struct PlaylistListView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            PlaylistListView(id: 1, router: PlaylistRouter(routingStarter: .favorites))
                .preferredColorScheme(.dark)
        }
    }
}
