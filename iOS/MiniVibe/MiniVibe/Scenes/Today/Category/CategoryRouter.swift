//
//  CategoryRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

struct CategoryRouter {
    
    @ViewBuilder
    func getDestination(to routingDestination: MiniVibeType, with id: Int?) -> some View {
        if let id = id {
            switch routingDestination {
            case .magazines:
                MagazineView(magazineID: id)
            case .favorites:
                PlaylistView(playlistID: id)
            case .recommendations:
                PlaylistView(playlistID: id)
            default:
                Text("기본 화면")
            }
        }
    }
}
