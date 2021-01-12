//
//  TabBarView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/28.
//

import SwiftUI
import DiveEventCollector

struct TabBarView: View {
    
    @ObservedObject private var playerViewModel: PlayerViewModel
    
    private let manager: EventManager
    
    init(manager: EventManager) {
        self.manager = manager
        self.playerViewModel = PlayerViewModel(manager: manager)
    }
    
    var body: some View {
        TabView {
            TodayView(manager: manager)
                .tabItem {
                    Image(systemName: "house.fill")
                    Text("투데이")
                }
                .overlay(NowPlayingView(viewModel: playerViewModel), alignment: .bottom)
            ChartView(playlistID: 18, manager: manager)
                .tabItem {
                    Image(systemName: "chart.bar.fill")
                    Text("차트")
                }
                .overlay(NowPlayingView(viewModel: playerViewModel), alignment: .bottom)
            SearchView(manager: manager)
                .tabItem {
                    Image(systemName: "magnifyingglass.circle")
                    Text("검색")
                }
                .overlay(NowPlayingView(viewModel: playerViewModel), alignment: .bottom)
            LibraryView(manager: manager)
                .tabItem {
                    Image(systemName: "tray.full.fill")
                    Text("보관함")
                }
        }
        .environmentObject(playerViewModel)
        .colorScheme(.dark)
    }
}
