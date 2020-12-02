//
//  TodayRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

class TodayRouter: DestinationOrientedRouterProtocol {
    typealias RoutingStarter = MiniVibeType
    
    func getDestination(to routingDestination: RoutingStarter) -> AnyView {
        switch routingDestination {
        case .magazines:
            return AnyView(ThumbnailListView(id: 1,
                                            router: ThumbnailRouter(routingStarter: .magazines)))
        case .playlists:
            return AnyView(ThumbnailListView(id: 1,
                                            router: ThumbnailRouter(routingStarter: .recommended)))
        case .djStations:
            return AnyView(DJStationListView())
        case .tracks:
            return AnyView(PlaylistView(playlistID: 1))
        default:
            return AnyView(ErrorView())
        }
    }
}
