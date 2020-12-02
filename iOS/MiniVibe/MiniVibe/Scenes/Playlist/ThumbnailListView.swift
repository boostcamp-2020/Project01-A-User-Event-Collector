//
//  ThumbnailListView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

struct ThumbnailListView: View {
    
    private let id: Int
    private let router: ThumbnailRouter
    @StateObject private var viewModel = ThumbnailListViewModel()
    
    init(id: Int, router: ThumbnailRouter) {
        self.id = id
        self.router = router
    }
    
    var body: some View {
        guard let title = router.title() else { return AnyView(ErrorView()) }
        return AnyView(
            List (viewModel.thumbnails.indexed(), id: \.1.id) { index, thumbnail in
                NavigationLink(
                    destination: router.getDestination(id: id)
                ) {
                    ThumbnailCellView(thumbnail: viewModel.thumbnails[index])
                }
            }.modifier(NavigationBarStyle(title: title))
            .onAppear() {
                viewModel.fetch(type: router.routingStarter, id: id)
            }
        )
    }
}

struct PlaylistListView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            ThumbnailListView(id: 1, router: ThumbnailRouter(routingStarter: .recommendations))
                .preferredColorScheme(.dark)
        }
    }
}
