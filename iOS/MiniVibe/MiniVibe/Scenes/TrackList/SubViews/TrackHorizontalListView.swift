//
//  TrackHorizontalListView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/02.
//

import SwiftUI
import DiveEventCollector

struct TrackHorizontalListView: View {
    let tracks: [Track]
    private let layout = [
        GridItem(.fixed(60)),
        GridItem(.fixed(60)),
        GridItem(.fixed(60)),
        GridItem(.fixed(60)),
        GridItem(.fixed(60))
    ]
    private let manager: EventManager

    init(tracks: [Track], manager: EventManager) {
        self.tracks = tracks
        self.manager = manager
    }
    
    var body: some View {
        Group {
            VStack {
                let screenEvent = ScreenEvent.screenViewedWithSource(.playlist, source: .chart)
                MemorySafeNavigationLink(
                    contentView: CategoryHeaderView(title: "오늘 TOP 100").foregroundColor(.primary),
                    destination: AnyView(PlaylistView(playlistID: 18)
                                            .onAppear {
                                                manager.log(screenEvent)
                                            })
                )
                ScrollView(.horizontal, showsIndicators: false) {
                    LazyHGrid(rows: layout,
                              spacing: 20) {
                        ForEach(tracks) { track -> TrackCellView in
                            TrackCellView(hasHeartAccessory: false, track: track)
                        }.frame(width: UIScreen.main.bounds.width - 64)
                    }
                }
            }
        }
    }
}

//struct TrackHorizontalListView_Previews: PreviewProvider {
//    static var previews: some View {
//        TrackHorizontalListView(tracks: TestData.playlist.tracks!,
//                                manager: AnalyticsManager(engine: MockServerEngine()))
//    }
//}
