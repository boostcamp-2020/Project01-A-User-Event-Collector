//
//  ThumbnailRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

class ThumbnailRouter: StarterOrientedRouterProtocol {
    typealias RoutingStarter = MiniVibeType
    
    let routingStarter: RoutingStarter
    private let manager: AnalyticsManager

    init(routingStarter: RoutingStarter, manager: AnalyticsManager) {
        self.routingStarter = routingStarter
        self.manager = manager
    }
    
    func getDestination(id: Int) -> AnyView {
        switch routingStarter {
        case .magazines:
            return AnyView(MagazineView(magazineID: id)
                            .onAppear {
                                self.manager.log(ScreenEvent.screenViewedWithSource(.magazine, source: .thumbnailList))
                            })
        case .recommendations:
            return AnyView(PlaylistView(playlistID: id)
                            .onAppear {
                                self.manager.log(ScreenEvent.screenViewedWithSource(.playlist, source: .thumbnailList))
                            })
        case .favorites:
            return AnyView(PlaylistView(playlistID: id)
                            .onAppear {
                                self.manager.log(ScreenEvent.screenViewedWithSource(.playlist, source: .thumbnailList))
                            })
        default:
            return AnyView(ErrorView()
                            .onAppear {
                                self.manager.log(ScreenEvent.screenViewedWithSource(.error, source: .thumbnailList))
                            })
        }
    }
    
    func title() -> String? {
        switch routingStarter {
        case .magazines, .recommendations, .favorites:
            return routingStarter.title()
        default:
            return nil
        }
    }
}
