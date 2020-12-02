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
    
    func getDestination(id: Int) -> AnyView {
        switch routingStarter {
        case .magazines:
            return AnyView(MagazineView(magazine: TestData.magazine))
        case .recommendations:
            return AnyView(PlaylistView(playlistID: id))
        case .favorites:
            return AnyView(PlaylistView(playlistID: id))
        default:
            return AnyView(ErrorView())
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
