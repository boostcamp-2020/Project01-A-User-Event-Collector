//
//  TodayRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

enum TodayRoutingType: RoutingTypeProtocol {
    case tracks, playlists, magazines, stations
}

class TodayRouter: DestinationOrientedRouterProtocol {
    typealias RoutingStarter = TodayRoutingType
    
    func getDestination(to routingDestination: RoutingStarter) -> AnyView {
        switch routingDestination {
        case .magazines:
            return AnyView(ThumbnailListView(id: 1,
                                            router: ThumbnailRouter(routingStarter: .magazines)))
        case .playlists:
            return AnyView(ThumbnailListView(id: 1,
                                            router: ThumbnailRouter(routingStarter: .recommended)))
        case .stations:
            return AnyView(DJStationListView())
        case .tracks:
            return AnyView(PlaylistView(playlistID: 1))
        }
    }
}
