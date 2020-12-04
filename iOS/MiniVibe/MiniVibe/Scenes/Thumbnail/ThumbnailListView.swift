//
//  ThumbnailListView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

struct ThumbnailListView: View {
    
    @StateObject private var viewModel = ThumbnailListViewModel()
    
    private let router: ThumbnailRouter
    
    init(router: ThumbnailRouter) {
        self.router = router
    }
    
    var body: some View {
        guard let title = router.title() else { return AnyView(ErrorView()) }
        
        return AnyView(
            List {
                ForEach(viewModel.thumbnails.indexed(), id: \.1.id) { _, thumbnail in
                    ZStack {
                        ThumbnailCellView(thumbnail: thumbnail)
                        NavigationLink(
                            destination: router.getDestination(id: thumbnail.id)
                        ) {
                            Rectangle().hidden()
                        }
                    }
                }
                Rectangle()
                    .clearBottom()
            }.modifier(NavigationBarStyle(title: title))
            .onAppear {
                viewModel.fetch(type: router.routingStarter)
            }
        )
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
