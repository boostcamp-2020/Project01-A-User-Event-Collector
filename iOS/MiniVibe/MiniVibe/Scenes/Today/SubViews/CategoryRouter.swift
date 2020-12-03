//
//  CategoryRouter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

struct CategoryRouter {
    
<<<<<<< HEAD:iOS/MiniVibe/MiniVibe/Scenes/Today/SubViews/CategoryRouter.swift
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
=======
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
>>>>>>> 24a78041855f0f9f610ea513ca58dc48daa0e1fa:iOS/MiniVibe/MiniVibe/Scenes/Today/Category/CategoryRouter.swift
        }
    }
}
