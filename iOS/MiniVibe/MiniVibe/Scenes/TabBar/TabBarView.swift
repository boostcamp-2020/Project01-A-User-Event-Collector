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
                    Image(systemName: "1.square.fill")
                    Text("First")
                }
                .overlay(NowPlayingView(viewModel: playerViewModel), alignment: .bottom)
            ChartView()
                .tabItem {
                    Image(systemName: "2.square.fill")
                    Text("Second")
                }
                .overlay(NowPlayingView(viewModel: playerViewModel), alignment: .bottom)
            
            Text("The Last Tab")
                .tabItem {
                    Image(systemName: "3.square.fill")
                    Text("Third")
                }
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
