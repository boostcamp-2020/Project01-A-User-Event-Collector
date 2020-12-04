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
    
    init(routingStarter: RoutingStarter) {
        self.routingStarter = routingStarter
    }
    
    func getDestination(id: Int) -> LazyView<AnyView> {
        switch routingStarter {
        case .magazines:
            return LazyView(AnyView(MagazineView(magazineID: id)))
        case .recommendations:
            return LazyView(AnyView(PlaylistView(playlistID: id)))
        case .favorites:
            return LazyView(AnyView(PlaylistView(playlistID: id)))
        default:
            return LazyView(AnyView(ErrorView()))
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
