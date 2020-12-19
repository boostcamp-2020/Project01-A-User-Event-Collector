//
//  TodayView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import SwiftUI
import DiveEventCollector

struct TodayView: View {
    private let router: TodayRouter
    private let manager: EventManager
    @StateObject private var viewModel = TodayViewModel()
    @State private var isAlerting = true
    
    init(manager: EventManager) {
        self.manager = manager
        self.router = TodayRouter(manager: manager)
    }
    
    var body: some View {
        NavigationView {
            List {
                let stationCategory = Category(stations: Array(viewModel.stations.prefix(3)))
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
            .navigationBarItems(trailing:
                                    Button(isAlerting ? "Alert Off" : "Alert On") {
                                        manager.isAlerting.toggle()
                                        isAlerting = manager.isAlerting
                                    }
            )
            .onAppear(perform: {
                viewModel.fetchAll()
                manager.log(ScreenEvent.screenViewed(.today))
            })
        }
        .preferredColorScheme(.dark)
        .navigationViewStyle(StackNavigationViewStyle())
    }
}
