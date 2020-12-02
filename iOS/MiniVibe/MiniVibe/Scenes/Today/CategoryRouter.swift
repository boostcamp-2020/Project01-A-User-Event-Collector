//
//  CategoryRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

class CategoryRouter: DestinationOrientedRouterProtocol {
    typealias RoutingType = MiniVibeType
    
    func getDestination(to routingDestination: MiniVibeType) -> AnyView {
        //TODO: 타입에따라서 다른 destination 보여주게하기! (대부분 id넘겨서 tracklist 보여주기
        switch routingDestination {
        case .magazines:
            return AnyView(MagazineView(magazine: TestData.magazine))
        case .playlists:
            return AnyView(PlaylistView(playlistID: 1))
        default:
            return AnyView(Text("기본 화면"))
        }
    }
}
