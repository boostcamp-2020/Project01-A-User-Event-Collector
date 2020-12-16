//
//  TodayRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

class TodayRouter: DestinationOrientedRouterProtocol {
    
    typealias RoutingStarter = MiniVibeType
    private let manager: EventManager
    
    init(manager: EventManager) {
        self.manager = manager
    }
    
    func getDestination(to routingDestination: RoutingStarter, with id: Int? = nil) -> AnyView {
        switch routingDestination {
        case .magazines:
            let router = ThumbnailRouter(routingStarter: .magazines, manager: manager)
            let screenEvent = ScreenEvent.screenViewedWithSource(.thumbnailList, source: .today)
            return AnyView(ThumbnailListView(router: router)
                            .onAppear { [weak self] in
                                self?.manager.log(screenEvent)
                            })
        case .recommendations:
            let router = ThumbnailRouter(routingStarter: .recommendations, manager: manager)
            let screenEvent = ScreenEvent.screenViewedWithSource(.thumbnailList, source: .today)
            return AnyView(ThumbnailListView(router: router)
                            .onAppear { [weak self] in
                                self?.manager.log(screenEvent)
                            })
        case .favorites:
            let router = ThumbnailRouter(routingStarter: .favorites, manager: manager)
            let screenEvent = ScreenEvent.screenViewedWithSource(.thumbnailList, source: .today)
            return AnyView(ThumbnailListView(router: router)
                            .onAppear { [weak self] in
                                self?.manager.log(screenEvent)
                            })
        case .djStations:
            let screenEvent = ScreenEvent.screenViewedWithSource(.djStationList, source: .today)
            return AnyView(DJStationListView(manager: manager)
                            .onAppear { [weak self] in
                                self?.manager.log(screenEvent)
                            })
        case .tracks:
            let screenEvent = ScreenEvent.screenViewedWithSource(.playlist, source: .today)
            return AnyView(PlaylistView(playlistID: 18)
                            .onAppear { [weak self] in
                                self?.manager.log(screenEvent)
                            })
        default:
            return AnyView(ErrorView())
        }
    }
}
