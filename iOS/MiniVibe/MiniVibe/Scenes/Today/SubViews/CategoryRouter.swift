//
//  CategoryRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI
import DiveEventCollector

class CategoryRouter: DestinationOrientedRouterProtocol {
    
    typealias RoutingType = MiniVibeType
    let manager: EventManager
    
    init(manager: EventManager) {
        self.manager = manager
    }

    func getDestination(to routingDestination: MiniVibeType, with id: Int?) -> AnyView {
        guard let id = id else { return AnyView(ErrorView()) }
        switch routingDestination {
        case .magazines:
            return AnyView(MagazineView(magazineID: id)
                            .onAppear { [weak self] in
                                self?.manager.log(ScreenEvent.screenViewedWithSource(.magazine, source: .today))
                            })
        case .favorites, .recommendations:
            return AnyView(PlaylistView(playlistID: id)
                            .onAppear { [weak self] in
                                self?.manager.log(ScreenEvent.screenViewedWithSource(.playlist, source: .today))
                            })
        default:
            return AnyView(Text("기본 화면"))
        }
    }
}
