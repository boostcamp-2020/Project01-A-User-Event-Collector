//
//  PlaylistRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import Foundation

//enum PlaylistRoutingDestination: RoutingDestinationProtocol {
//    case magazines
//    case recommended
//    case favorites
//}

enum PlaylistRouter: RouterProtocol {
    case magazines
    case recommended
    case favorites
    
    func title() -> String {
        switch self {
        case .magazines:
            return "VIBE MAG"
        case .recommended:
            return "VIBE 추천 플레이리스트"
        case .favorites:
            return "즐겨듣는 플레이리스트"
        }
    }
    
    func route() {
        
    }
}
