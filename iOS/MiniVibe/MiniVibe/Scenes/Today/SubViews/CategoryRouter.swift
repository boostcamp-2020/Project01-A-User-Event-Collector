//
//  CategoryRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

class CategoryRouter: DestinationOrientedRouterProtocol {
    
    typealias RoutingType = MiniVibeType
    private let manager: AnalyticsManager
    
    init(manager: AnalyticsManager) {
        self.manager = manager
    }

    
    func getDestination(to routingDestination: MiniVibeType, with id: Int?) -> AnyView {
        guard let id = id else { return AnyView(ErrorView()) }
        switch routingDestination {
        case .magazines:
            return AnyView(MagazineView(magazineID: id)
                            .onAppear {
                                self.manager.log(ScreenEvent.screenViewedWithSource(.magazine, source: .today))
                            })
        case .favorites:
            return AnyView(PlaylistView(playlistID: id)
                            .onAppear {
                                self.manager.log(ScreenEvent.screenViewedWithSource(.playlist, source: .today))
                            })
        case .recommendations:
            return AnyView(PlaylistView(playlistID: id)
                            .onAppear {
                                self.manager.log(ScreenEvent.screenViewedWithSource(.playlist, source: .today))
                            })
        default:
            return AnyView(Text("기본 화면"))
        }
    }
}
