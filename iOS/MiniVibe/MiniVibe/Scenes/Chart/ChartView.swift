//
//  ChartView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/01.
//

import SwiftUI
import DiveEventCollector

struct ChartView: View {
    @StateObject private var viewModel = PlaylistViewModel()
    private let manager: EventManager
    private let playlistID: Int
    private let layout = [GridItem(.flexible())]
    
    init(playlistID: Int, manager: EventManager) {
        self.playlistID = playlistID
        self.manager = manager
    }
    
    var body: some View {
        NavigationView {
            ScrollView {
                LazyVGrid(columns: layout) {
                    if let tracks = viewModel.playlist?.tracks {
                        TrackHorizontalListView(tracks: tracks, manager: manager)
                    }
                }
            }
            .padding()
            .navigationTitle("차트")
            .onAppear {
                manager.log(ScreenEvent.screenViewed(.chart))
                viewModel.fetch(id: playlistID)
            }

        }    }
    
}
