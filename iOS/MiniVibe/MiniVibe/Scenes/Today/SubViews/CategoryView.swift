//
//  CategoryRowView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import SwiftUI

struct CategoryView: View {
    let category: Category
    private let router: CategoryRouter
    
    init(category: Category, manager: AnalyticsManager) {
        self.category = category
        router = CategoryRouter(manager: manager)
    }
    
    var body: some View {
        VStack(alignment: .leading) {
            CategoryHeaderView(title: category.title)
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(alignment: .top) {
                    ForEach(category.items) { item in
                        if category.type == MiniVibeType.djStations {
                            Button(action: {
                                router.manager.log(ButtonEvent.djStationTouched)
                            }, label: {
                                CategoryCellView(item: item, mode: category.mode)
                            })
                        } else {
                            MemorySafeNavigationLink(
                                contentView: CategoryCellView(item: item, mode: category.mode),
                                destination: router.getDestination(to: category.type, with: item.id)
                            )
                        }
                    }
                }
            }
        }
        .padding(.bottom, 30)
    }
    
}

//struct CategoryRowView_Previews: PreviewProvider {
//    static let favoritePlaylistItems: [CategoryItem] =
//        [.init(id: 1, imageName: "favorite1", title: "잠못드는 밤", author: "VIBE", description: nil),
//         .init(id: 2, imageName: "favorite1", title: "잠못드는 밤", author: "VIBE", description: nil),
//         .init(id: 1, imageName: "favorite1", title: "잠못드는 밤", author: "VIBE", description: nil)
//        ]
//    
//    static var previews: some View {
//        NavigationView {
//            CategoryView(category: Category(title: "Station",
//                                            items: favoritePlaylistItems,
//                                            type: .magazines,
//                                            mode: .full),
//                         manager: AnalyticsManager(engine: MockAnalyticsEngine()))
//        }
//        //        .preferredColorScheme(.dark)
//    }
//}
