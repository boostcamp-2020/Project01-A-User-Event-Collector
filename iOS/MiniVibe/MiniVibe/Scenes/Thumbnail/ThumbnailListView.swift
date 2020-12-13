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
    private let layout = [GridItem(.flexible())]
    
    init(router: ThumbnailRouter) {
        self.router = router
    }
    
    var body: some View {
        guard let title = router.title() else { return AnyView(ErrorView()) }
        
        return AnyView(
            ScrollView(showsIndicators: false) {
                LazyVGrid(columns: layout) {
                    ForEach(viewModel.thumbnails, id: \.id) { thumbnail in
                        MemorySafeNavigationLink(
                            contentView: ThumbnailCellView(thumbnail: thumbnail),
                            destination: router.getDestination(id: thumbnail.id)
                        )
                    }
                    Rectangle()
                        .clearBottom()
                }
                .modifier(NavigationBarStyle(title: title))
                .onAppear {
                    viewModel.fetch(type: router.routingStarter)
                }
            }
            .padding()
        )
    }
}

//struct PlaylistListView_Previews: PreviewProvider {
//    static var previews: some View {
//        NavigationView {
//            let manager = AnalyticsManager(engine: MockAnalyticsEngine())
//            let router = ThumbnailRouter(routingStarter: .recommendations,
//                                         manager: manager)
//            ThumbnailListView(router: router)
//                .preferredColorScheme(.dark)
//        }
//    }
//}
