//
//  TabBarView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/28.
//

import SwiftUI

struct TabBarView: View {
    
    @StateObject var playerViewModel =  PlayerViewModel()
    
    var body: some View {
        TabView {
            TodayView()
                .tabItem {
                    Image(systemName: "house.fill")
                    Text("투데이")
                }
                .overlay(NowPlayingView(viewModel: playerViewModel), alignment: .bottom)
            ChartView(tracks: TestData.playlist.tracks!)
                .tabItem {
                    Image(systemName: "chart.bar.fill")
                    Text("차트")
                }
                .overlay(NowPlayingView(viewModel: playerViewModel), alignment: .bottom)
            SearchView()
                .tabItem {
                    Image(systemName: "magnifyingglass.circle")
                    Text("검색")
                }
                .overlay(NowPlayingView(viewModel: playerViewModel), alignment: .bottom)
        }
        .environmentObject(playerViewModel)
        .colorScheme(.dark)
    }
}

struct TabBarView_Previews: PreviewProvider {
    static var previews: some View {
        TabBarView()
    }
}
