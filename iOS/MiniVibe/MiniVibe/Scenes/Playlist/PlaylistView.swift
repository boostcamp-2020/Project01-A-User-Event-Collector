//
//  PlaylistListView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

struct PlaylistListView: View {
    
    @ObservedObject private var viewModel: PlaylistListViewModel
    
    init(viewModel: PlaylistListViewModel) {
        self.viewModel = viewModel
    }
    
    var body: some View {
        NavigationView {
            ScrollView {
                LazyVStack {
                    ForEach(viewModel.playlistList.indexed(), id: \.1.id) { index, playlist in
                        NavigationLink(destination: Text("")) {
//                            @StateObject var cellviewModel = PlaylistCellViewModel(playlist: $viewModel.playlistList[index], navigationType: viewModel.navigationType)
                            PlaylistCellView(playlist: $viewModel.playlistList[index])
                        }
                    }
                }
            }.modifier(NavigationBarStyle(title: viewModel.navigationType.title()))
        }
        .onAppear() {
            viewModel.fetchPlaylistList()
        }
    }
}

struct PlaylistView_Previews: PreviewProvider {
    static var previews: some View {
        let viewModel = PlaylistListViewModel(navigationType: .favorites)
        PlaylistListView(viewModel: viewModel)
            .preferredColorScheme(.dark)
    }
}