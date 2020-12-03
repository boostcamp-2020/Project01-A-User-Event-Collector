//
//  TodayRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

class TodayRouter {
    @ViewBuilder
    func getDestination(to routingDestination: MiniVibeType, with id: Int? = nil) -> some View {
        switch routingDestination {
        case .magazines:
            ThumbnailListView(router: ThumbnailRouter(routingStarter: .magazines))
        case .recommendations:
            ThumbnailListView(router: ThumbnailRouter(routingStarter: .recommendations))
        case .favorites:
            ThumbnailListView(router: ThumbnailRouter(routingStarter: .favorites))
        case .djStations:
            DJStationListView()
        case .tracks:
            PlaylistView(playlistID: 18)
        default:
            ErrorView()
        }
    }
}
