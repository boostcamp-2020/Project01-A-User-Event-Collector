//
//  CategoryRowView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import SwiftUI
import DiveEventCollector

struct CategoryView: View {
    private let category: Category
    private let router: CategoryRouter
    
    init(category: Category, manager: EventManager) {
        self.category = category
        router = CategoryRouter(manager: manager)
    }
    
    var body: some View {
        VStack(alignment: .leading) {
            CategoryHeaderView(title: category.title)
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(alignment: .top) { [weak router = self.router] in
                    if let router = router {
                        ForEach(category.items) { item in
                            if category.type == MiniVibeType.djStations {
                                ZStack {
                                    CategoryCellView(item: item, mode: category.mode)
                                    Button(action: {
                                        router.manager.log(ButtonEvent.djStationTouched)
                                    }, label: {
                                        Rectangle().hidden()
                                    })
                                }
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
        }
        .padding(.bottom, 30)
    }
    
}
