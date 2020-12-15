//
//  CustomTabViewContent.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/14.
//

import SwiftUI

struct CustomTabViewContent: View {
    private let manager: AnalyticsManager
    var selectedTab: MiniVibeTab

    init(manager: AnalyticsManager, selectedTab: MiniVibeTab) {
        self.manager = manager
        self.selectedTab = selectedTab
    }

    var body: some View {
        if case MiniVibeTab.today = selectedTab {
            TodayView(manager: manager)
        } else if case MiniVibeTab.chart = selectedTab {
            ChartView(playlistID: 18, manager: manager)
        } else if case MiniVibeTab.search = selectedTab {
            SearchView(manager: manager)
        } else if case MiniVibeTab.library = selectedTab {
            LibraryView(manager: manager)
        }

    }
}
