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
        Group {
            if let title = router.title() {
                List{
                    ForEach(viewModel.thumbnails.indexed(), id: \.1.id) {
                        _, thumbnail in
                        NavigationLink(
                            destination: router.getDestination(id: thumbnail.id)
                        ) {
                            ThumbnailCellView(thumbnail: thumbnail)
                        }
                    }
                    Rectangle()
                        .clearBottom()
                }.modifier(NavigationBarStyle(title: title))
                .onAppear() {
                    viewModel.fetch(type: router.routingStarter)
                }
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
