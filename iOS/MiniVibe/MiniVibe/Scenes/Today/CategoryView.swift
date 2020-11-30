//
//  CategoryRowView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import SwiftUI

struct CategoryView: View {
    let category: Category
    private let router = CategoryRouter()
    
    var body: some View {
        VStack(alignment: .leading) {
            CategoryHeaderView(title: category.title)
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(alignment: .top, spacing: 10) {
                    ForEach(category.items) { item in
                        NavigationLink(
                            destination: router.getDestination(to: category.type)
                        ) {
                            CategoryCellView(item: item, mode: category.mode)
                        }
                    }
                }
            }
        }
        .padding(.bottom, 30)
    }
    
}

struct CategoryRowView_Previews: PreviewProvider {
    static let favoritePlaylistItems: [CategoryCell] =
        [.init(id: 1, imageName: "favorite1", title: "잠못드는 밤", description: "VIBE"),
         .init(id: 2, imageName: "favorite2", title: "Kanye West 대표곡", description: "내가 만든 플레이리스트"),
         .init(id: 4, imageName: "favorite3", title: "Avicii 대표곡", description: "VIBE"),
        ]

    static var previews: some View {
        NavigationView {
            CategoryView(category: Category(title: "Station", items: favoritePlaylistItems, type: .stations, mode: .full))
        }
//        .preferredColorScheme(.dark)
    }
}

