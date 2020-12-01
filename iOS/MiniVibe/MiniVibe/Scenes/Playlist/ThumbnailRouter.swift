//
//  ThumbnailRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

enum ThumbnailRoutingType: String, RoutingTypeProtocol{
    case magazines
    case recommended
    case favorites
}

class ThumbnailRouter: StarterOrientedRouterProtocol {
    typealias RoutingStarter = ThumbnailRoutingType
    
    let routingStarter: RoutingStarter
    
    init(routingStarter: RoutingStarter) {
        self.routingStarter = routingStarter
    }
    
    func getDestination(id: Int) -> AnyView {
        switch routingStarter {
        case .magazines:
            return AnyView(MagazineView(magazine: TestData.magazine))
        case .recommended:
            return AnyView(PlaylistView(playlistID: id))
        case .favorites:
            return AnyView(PlaylistView(playlistID: id))
        }
    }
    
    func title() -> String {
        switch routingStarter {
        case .magazines:
            return "VIBE MAG"
        case .recommended:
            return "VIBE 추천 플레이리스트"
        case .favorites:
            return "즐겨듣는 플레이리스트"
        }
    }
}
