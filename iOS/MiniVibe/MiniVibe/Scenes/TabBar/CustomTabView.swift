//
//  CustomTabView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/06.
//

import SwiftUI

struct CustomTabView: View {
    
    @State var selectedTab: MiniVibeTab = MiniVibeTab.today
    @ObservedObject var playerViewModel: PlayerViewModel
    
    private let manager: AnalyticsManager

    init(manager: AnalyticsManager) {
        self.manager = manager
        self.playerViewModel = PlayerViewModel(manager: manager)
    }

    var body: some View {
        GeometryReader { geometry in
            VStack {
                Spacer()
                if case MiniVibeTab.today = selectedTab {
                    TodayView(manager: manager)
                } else if case MiniVibeTab.chart = selectedTab {
                    ChartView(playlistID: 18, manager: manager)
                } else if case MiniVibeTab.search = selectedTab {
                    SearchView(manager: manager)
                } else if case MiniVibeTab.library = selectedTab {
                    //보관함뷰 여기에 추가
                    VStack {
                        Color.white
                    }
                    .foregroundColor(Color.gray)
                    .background(Color.white)
                }
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

extension CustomTabView {
    enum MiniVibeTab: Hashable, CaseIterable {
        case today
        case chart
        case search
        case library
    }
}

//struct CustomTabView_Previews: PreviewProvider {
//    static var previews: some View {
//        Group {
//            CustomTabView()
//            CustomTabView()
//                .previewDevice("iPhone SE (2nd generation)")
//        }
//    }
//}

