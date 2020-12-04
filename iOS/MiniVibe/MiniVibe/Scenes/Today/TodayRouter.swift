//
//  TodayRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

class TodayRouter: DestinationOrientedRouterProtocol {
    
    typealias RoutingStarter = MiniVibeType
    
    func getDestination(to routingDestination: RoutingStarter, with id: Int? = nil) -> LazyView<AnyView> {
        switch routingDestination {
        case .magazines:
            return LazyView(AnyView(ThumbnailListView(router: ThumbnailRouter(routingStarter: .magazines))))
        case .recommendations:
            return LazyView(AnyView(ThumbnailListView(router: ThumbnailRouter(routingStarter: .recommendations))))
        case .favorites:
            return LazyView(AnyView(ThumbnailListView(router: ThumbnailRouter(routingStarter: .favorites))))
        case .djStations:
            return LazyView(AnyView(DJStationListView()))
        case .tracks:
            return LazyView(AnyView(PlaylistView(playlistID: 18)))
        default:
            return LazyView(AnyView(ErrorView()))
        }
    }
}
