//
//  TodayRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

enum TodayRoutingType: RoutingTypeProtocol {
    case track, playlist, magazine, station
}

class TodayRouter: DestinationOrientedRouterProtocol {
    typealias RoutingStarter = TodayRoutingType
    
    func getDestination(to routingDestination: RoutingStarter) -> AnyView {
        switch routingDestination {
        case .magazine:
            return AnyView(PlaylistListView(id: 1,
                                            router: PlaylistRouter(routingStarter: .magazines)))
        case .playlist:
            return AnyView(PlaylistListView(id: 1,
                                            router: PlaylistRouter(routingStarter: .recommended)))
        case .station:
            return AnyView(DJStationListView())
        case .track:
            return AnyView(TrackListView(id: 1))
        }
    }
}
