//
//  CategoryRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

class CategoryRouter: DestinationOrientedRouterProtocol {
    typealias RoutingType = TodayRoutingType
    
    func getDestination(to routingDestination: TodayRoutingType) -> AnyView {
        //TODO: 타입에따라서 다른 destination 보여주게하기! (대부분 id넘겨서 tracklist 보여주기
        switch routingDestination {
        case .magazines:
            return AnyView(Text("매거진 화면 보여주기")
                            .bold())
        case .playlists:
            return AnyView(PlaylistView())
        default:
            return AnyView(Text("기본 화면"))
        }
    }
}
