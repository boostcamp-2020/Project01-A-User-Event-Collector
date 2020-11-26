//
//  TodayView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import SwiftUI

struct TodayView: View {
    var body: some View {
        NavigationView {
            List {
                ForEach(TestData.categories) { category in
                    NavigationLink(
                        destination: getDestination(from: category.type),
                        label: {
                            CategoryView(category: category)
                        }
                    )
                }
            }
            .navigationTitle("VIBE")
        }
        .preferredColorScheme(.dark)
    }
    
    func getDestination(from type: CategoryType) -> AnyView {
        // 타입에따라서 다른 destination 보여주게하기!
        switch type {
        case .magazine:
            return AnyView(PlaylistListView(viewModel: PlaylistListViewModel(navigationType: .magazines)))
        case .playlist:
            return AnyView(PlaylistListView(viewModel: PlaylistListViewModel(navigationType: .favorites)))
        case .station:
            return AnyView(DJStationListView())
        case .track:
            return AnyView(TrackListView())
        }
    }
    
}

struct TodayView_Previews: PreviewProvider {
    static var previews: some View {
        TodayView()
    }
}

struct TestData {
    static let categories: [Category]
        = [.init(title: "DJ 스테이션", type: .station, mode: .half),
           .init(title: "즐겨찾는 플레이리스트 ", type: .playlist, mode: .half),
           .init(title: "VIBE 추천 플레이리스트", type: .playlist, mode: .full),
           .init(title: "VIBE MAG", type: .magazine, mode: .half),
           .init(title: "최근들은 노래", type: .track, mode: .full)]
}
