//
//  CustomTabViewContent.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/14.
//

import SwiftUI
import DiveEventCollector

struct CustomTabViewContent: View {
    private let manager: EventManager
    var selectedTab: MiniVibeTab

    init(manager: EventManager, selectedTab: MiniVibeTab) {
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
