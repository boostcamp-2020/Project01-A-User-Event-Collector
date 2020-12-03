//
//  TodayRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

class TodayRouter: DestinationOrientedRouterProtocol {
    
    typealias RoutingStarter = MiniVibeType
    
    func getDestination(to routingDestination: RoutingStarter, with id: Int? = nil) -> AnyView {
        switch routingDestination {
        case .magazines:
            return AnyView(ThumbnailListView(router: ThumbnailRouter(routingStarter: .magazines)))
        case .recommendations:
            return AnyView(ThumbnailListView(router: ThumbnailRouter(routingStarter: .recommendations)))
        case .favorites:
            return AnyView(ThumbnailListView(router: ThumbnailRouter(routingStarter: .favorites)))
        case .djStations:
            return AnyView(DJStationListView())
        case .tracks:
            return AnyView(PlaylistView(playlistID: 1))
        default:
            return AnyView(ErrorView())
        }
    }
}
