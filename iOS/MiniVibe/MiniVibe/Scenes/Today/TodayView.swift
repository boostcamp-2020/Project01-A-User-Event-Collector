//
//  TodayView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import SwiftUI

struct TodayView: View {
    private let router: TodayRouter
    private let manager: AnalyticsManager
    @StateObject private var viewModel = TodayViewModel()

    init(manager: AnalyticsManager) {
        self.manager = manager
        self.router = TodayRouter(manager: manager)
    }

    var body: some View {
        NavigationView {
            List {
                let stationCategory = Category(stations: viewModel.stations)
                MemorySafeNavigationLink(
                    contentView: CategoryView(category: stationCategory, manager: manager),
                    destination: router.getDestination(to: .djStations)
                )

                let favoritesCategory = Category(playlists: viewModel.favorites,
                                                 type: .favorites,
                                                 mode: .half)
                MemorySafeNavigationLink(
                    contentView: CategoryView(category: favoritesCategory, manager: manager),
                    destination: router.getDestination(to: .favorites)
                )
                
                let magazinesCategory = Category(magazines: viewModel.magazines,
                                                 mode: .full)
                MemorySafeNavigationLink(
                    contentView: CategoryView(category: magazinesCategory, manager: manager),
                    destination: router.getDestination(to: .magazines)
                )
                
                let recommendationsCategory = Category(playlists: viewModel.recommends,
                                                       type: .recommendations,
                                                       mode: .full)
                MemorySafeNavigationLink(
                    contentView: CategoryView(category: recommendationsCategory, manager: manager),
                    destination: router.getDestination(to: .recommendations)
                )
                
//                MemorySafeNavigationLink(
//                    contentView: TrackHorizontalListView(tracks: viewModel.tracks),
//                    destination: router.getDestination(to: .tracks)
//                )
                
                Rectangle()
                    .clearBottom()
            }
            .listStyle(PlainListStyle())
            .navigationTitle("VIBE")
            .onAppear(perform: {
                viewModel.fetchAll()
                manager.log(ScreenEvent.screenViewed(.today))
            })
        }
        .preferredColorScheme(.dark)
        .navigationViewStyle(StackNavigationViewStyle())
    }
}

//struct TodayView_Previews: PreviewProvider {
//    static var previews: some View {
//        TodayView(manager: AnalyticsManager(engine: MockAnalyticsEngine()))
//    }
//}
