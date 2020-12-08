//
//  TrackHorizontalListView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/02.
//

import SwiftUI

struct TrackHorizontalListView: View {
    let tracks: [Track]
    private let layout = [
        GridItem(.fixed(60)),
        GridItem(.fixed(60)),
        GridItem(.fixed(60)),
        GridItem(.fixed(60)),
        GridItem(.fixed(60))
    ]
    private let manager: AnalyticsManager

    init(tracks: [Track], manager: AnalyticsManager) {
        self.tracks = tracks
        self.manager = manager
    }
    
    var body: some View {
        Group {
            VStack {
                MemorySafeNavigationLink(
                    contentView: CategoryHeaderView(title: "오늘 TOP 100").foregroundColor(.primary),
                    destination: AnyView(PlaylistView(playlistID: 18)
                                            .onAppear {
                                                manager.log(ScreenEvent.screenViewedWithSource(.playlist, source: .chart))
                                            })
                )
                ScrollView(.horizontal, showsIndicators: false) {
                    LazyHGrid(rows: layout,
                              spacing: 20) {
                        ForEach(tracks) { track -> TrackCellView in
                            TrackCellView(hasAccessory: false, track: track)
                        }.frame(width: UIScreen.main.bounds.width - 64)
                    }
                }
            }
        }
    }
}

struct TrackHorizontalListView_Previews: PreviewProvider {
    static var previews: some View {
        TrackHorizontalListView(tracks: TestData.playlist.tracks!, manager: AnalyticsManager(engine: MockAnalyticsEngine()))
    }
}