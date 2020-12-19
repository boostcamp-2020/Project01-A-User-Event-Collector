//
//  LibraryView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/08.
//

import SwiftUI
import DiveEventCollector

struct LibraryView: View {
    private let layout = [GridItem(.flexible())]
    private let manager: EventManager
    @StateObject var viewModel: LibraryViewModel
    
    init(manager: EventManager) {
        self.manager = manager
        _viewModel = StateObject(wrappedValue: LibraryViewModel(manager: manager))
    }

    var body: some View {
        NavigationView {
            ScrollView(showsIndicators: false) {
                LazyVGrid(columns: layout,
                          spacing: 20,
                          pinnedViews: [.sectionHeaders]) {
                    TrackListView(tracks: viewModel.tracks)
                }
                .padding()
                Rectangle()
                    .clearBottom()
            }
            .navigationTitle("보관함")
            .onAppear {
                viewModel.fetch()
                manager.log(ScreenEvent.screenViewed(.library))
            }
        }
    }
}
