//
//  CustomTabView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/06.
//

import SwiftUI

enum MiniVibeTab: Hashable, CaseIterable {
    case today
    case chart
    case search
    case library
}

struct CustomTabView: View {
    
    @State var selectedTab: MiniVibeTab = MiniVibeTab.today
    @ObservedObject var playerViewModel: PlayerViewModel
    
    private let manager: EventManager

    init(manager: EventManager) {
        self.manager = manager
        self.playerViewModel = PlayerViewModel(manager: manager)
    }

    var body: some View {
        GeometryReader { geometry in
            VStack {
                Spacer()
                CustomTabViewContent(manager: manager, selectedTab: selectedTab)
                Spacer()
                ZStack {
                    NowPlayingView(viewModel: playerViewModel)
                        .offset(y: -geometry.size.height/12)
                    
                    HStack(alignment: .bottom, spacing: 30) {
                        TabIconView(height: geometry.size.height/10,
                                imageName: "house.fill",
                                labelText: "투데이",
                                tab: .today,
                                selectedTab: $selectedTab)
                        TabIconView(height: geometry.size.height/10,
                                imageName: "chart.bar.fill",
                                labelText: "차트",
                                tab: .chart,
                                selectedTab: $selectedTab)
                        TabIconView(height: geometry.size.height/10,
                                imageName: "magnifyingglass.circle",
                                labelText: "검색",
                                tab: .search,
                                selectedTab: $selectedTab)
                        TabIconView(height: geometry.size.height/10,
                                imageName: "tray.full.fill",
                                labelText: "보관함",
                                tab: .library,
                                selectedTab: $selectedTab)
                    }
                    .padding(.horizontal, 20)
                    .frame(width: geometry.size.width, height: geometry.size.height/12)
                    .background(Color.black.shadow(radius: 2))
                }
            }
        }
        .environmentObject(playerViewModel)
        .edgesIgnoringSafeArea(.top)
    }
}
