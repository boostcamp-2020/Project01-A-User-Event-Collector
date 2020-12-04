//
//  CategoryRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

class CategoryRouter: DestinationOrientedRouterProtocol {
    
    typealias RoutingType = MiniVibeType
    
    func getDestination(to routingDestination: MiniVibeType, with id: Int?) -> LazyView<AnyView> {
        guard let id = id else { return LazyView(AnyView(ErrorView())) }
        switch routingDestination {
        case .magazines:
            return LazyView(AnyView(MagazineView(magazineID: id)))
        case .favorites:
            return LazyView(AnyView(PlaylistView(playlistID: id)))
        case .recommendations:
            return LazyView(AnyView(PlaylistView(playlistID: id)))
        default:
            return LazyView(AnyView(Text("기본 화면")))
        }
    }
}
