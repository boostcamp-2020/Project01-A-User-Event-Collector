//
//  CategoryRowView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import SwiftUI

struct CategoryView: View {
    let category: Category
    
    var body: some View {
        VStack(alignment: .leading) {
            CategoryInfoView(title: category.title)
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(alignment: .top, spacing: 10) {
                    ForEach(category.items) { item in
                        NavigationLink(
                            destination: getDestination(from: category.type)
                        ) {
                            CategoryItemView(item: item, mode: category.mode)
                        }
                    }
                }
            }
        }
        .padding(.bottom, 30)
    }
    
    func getDestination(from type: CategoryType) -> AnyView {
        //TODO: 타입에따라서 다른 destination 보여주게하기! (대부분 id넘겨서 tracklist 보여주기
        switch type {
        case .magazine:
            return AnyView(Text("매거진 화면 보여주기")
                            .bold())
        case .playlist:
            return AnyView(TrackListView())
        default:
            return AnyView(Text("기본 화면"))
        }
    }
    
}

struct CategoryRowView_Previews: PreviewProvider {
    static let favoritePlaylistItems: [CategoryItem] =
        [.init(id: 1, imageName: "favorite1", title: "잠못드는 밤", description: "VIBE"),
         .init(id: 2, imageName: "favorite2", title: "Kanye West 대표곡", description: "내가 만든 플레이리스트"),
         .init(id: 4, imageName: "favorite3", title: "Avicii 대표곡", description: "VIBE"),
        ]

    static var previews: some View {
        NavigationView {
            CategoryView(category: Category(title: "Station", items: favoritePlaylistItems, type: .station, mode: .full))
        }
//        .preferredColorScheme(.dark)
    }
}

