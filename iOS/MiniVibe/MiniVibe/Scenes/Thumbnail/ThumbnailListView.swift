//
//  ThumbnailListView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

struct ThumbnailListView: View {
    
    private let router: ThumbnailRouter
    @StateObject private var viewModel = ThumbnailListViewModel()
    
    init(router: ThumbnailRouter) {
        self.router = router
    }
    
    var body: some View {
<<<<<<< HEAD:iOS/MiniVibe/MiniVibe/Scenes/Thumbnail/ThumbnailListView.swift
        guard let title = router.title() else { return AnyView(ErrorView()) }
        
        return AnyView(
            List {
                ForEach(viewModel.thumbnails.indexed(), id: \.1.id) { _, thumbnail in
                    NavigationLink(
                        destination: router.getDestination(id: thumbnail.id)
                    ) {
                        ThumbnailCellView(thumbnail: thumbnail)
=======
        Group {
            if let title = router.title() {
                List {
                    ForEach(viewModel.thumbnails.indexed(), id: \.1.id) { _, thumbnail in
                        NavigationLink(
                            destination: router.getDestination(id: thumbnail.id)
                        ) {
                            ThumbnailCellView(thumbnail: thumbnail)
                        }
>>>>>>> 24a78041855f0f9f610ea513ca58dc48daa0e1fa:iOS/MiniVibe/MiniVibe/Scenes/Playlist/ThumbnailListView.swift
                    }
                    Rectangle()
                        .clearBottom()
                }.modifier(NavigationBarStyle(title: title))
                .onAppear {
                    viewModel.fetch(type: router.routingStarter)
                }
<<<<<<< HEAD:iOS/MiniVibe/MiniVibe/Scenes/Thumbnail/ThumbnailListView.swift
                Rectangle()
                    .clearBottom()
            }.modifier(NavigationBarStyle(title: title))
            .onAppear {
                viewModel.fetch(type: router.routingStarter)
=======
>>>>>>> 24a78041855f0f9f610ea513ca58dc48daa0e1fa:iOS/MiniVibe/MiniVibe/Scenes/Playlist/ThumbnailListView.swift
            }
        }
    }
}

struct PlaylistListView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ThumbnailListView(router: ThumbnailRouter(routingStarter: .recommendations))
                .preferredColorScheme(.dark)
        }
    }
}
