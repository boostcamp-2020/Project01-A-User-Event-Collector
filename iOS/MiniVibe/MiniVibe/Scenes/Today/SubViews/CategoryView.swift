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
                            destination: router.getDestination(to: category.type, with: item.id)
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
    static let favoritePlaylistItems: [CategoryItem] =
        [.init(id: 1, imageName: "favorite1", title: "잠못드는 밤", author: "VIBE", description: nil),
         .init(id: 2, imageName: "favorite1", title: "잠못드는 밤", author: "VIBE", description: nil),
         .init(id: 1, imageName: "favorite1", title: "잠못드는 밤", author: "VIBE", description: nil)
        ]

    static var previews: some View {
        NavigationView {
            CategoryView(category: Category(title: "Station",
                                            items: favoritePlaylistItems,
<<<<<<< HEAD:iOS/MiniVibe/MiniVibe/Scenes/Today/SubViews/CategoryView.swift
                                            type: .magazines, mode: .full))
=======
                                            type: .magazines,
                                            mode: .full))
>>>>>>> 24a78041855f0f9f610ea513ca58dc48daa0e1fa:iOS/MiniVibe/MiniVibe/Scenes/Today/Category/CategoryView.swift
        }
    }
}
