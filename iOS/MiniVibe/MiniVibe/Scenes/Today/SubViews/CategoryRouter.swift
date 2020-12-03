//
//  CategoryRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

class CategoryRouter: DestinationOrientedRouterProtocol {
    
    typealias RoutingType = MiniVibeType
    
    func getDestination(to routingDestination: MiniVibeType, with id: Int?) -> AnyView {
        guard let id = id else { return AnyView(ErrorView()) }
        switch routingDestination {
        case .magazines:
            return AnyView(MagazineView(magazineID: id))
        case .favorites:
            return AnyView(PlaylistView(playlistID: id))
        case .recommendations:
            return AnyView(PlaylistView(playlistID: id))
        default:
            return AnyView(Text("기본 화면"))
        }
    }
}
