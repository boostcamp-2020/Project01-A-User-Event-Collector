//
//  ThumbnailRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

class ThumbnailRouter {
    let routingStarter: MiniVibeType
    
    init(routingStarter: MiniVibeType) {
        self.routingStarter = routingStarter
    }
    
    @ViewBuilder
    func getDestination(id: Int) -> some View {
        switch routingStarter {
        case .magazines:
            MagazineView(magazineID: id)
        case .recommendations:
            PlaylistView(playlistID: id)
        case .favorites:
            PlaylistView(playlistID: id)
        default:
            ErrorView()
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
