//
//  TodayRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

class TodayRouter: DestinationOrientedRouterProtocol {
    
    typealias RoutingStarter = MiniVibeType
    private let manager: AnalyticsManager
    
    init(manager: AnalyticsManager) {
        self.manager = manager
    }
    
    func getDestination(to routingDestination: RoutingStarter, with id: Int? = nil) -> AnyView {
        switch routingDestination {
        case .magazines:
            return AnyView(ThumbnailListView(router: ThumbnailRouter(routingStarter: .magazines, manager: manager))
                            .onAppear {
                                self.manager.log(ScreenEvent.screenViewedWithSource(.thumbnailList, source: .today))
                            }
            )
        case .recommendations:
            return AnyView(ThumbnailListView(router: ThumbnailRouter(routingStarter: .recommendations, manager: manager))
                            .onAppear {
                                self.manager.log(ScreenEvent.screenViewedWithSource(.thumbnailList, source: .today))
                            }
            )
        case .favorites:
            return AnyView(ThumbnailListView(router: ThumbnailRouter(routingStarter: .favorites, manager: manager))
                            .onAppear {
                                self.manager.log(ScreenEvent.screenViewedWithSource(.thumbnailList, source: .today))
                            }
            )
        case .djStations:
            return AnyView(DJStationListView()
                            .onAppear {
                                self.manager.log(ScreenEvent.screenViewedWithSource(.djStationList, source: .today))
                            }
            )
        case .tracks:
            return AnyView(PlaylistView(playlistID: 18)
                            .onAppear {
                                self.manager.log(ScreenEvent.screenViewedWithSource(.playlist, source: .today))
                            }
            )
        default:
            return AnyView(ErrorView())
        }
    }
}
