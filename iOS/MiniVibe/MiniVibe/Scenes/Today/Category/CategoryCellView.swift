//
//  CategoryCellView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import SwiftUI

struct CategoryCellView: View {
    let item: CategoryCell
    let mode: CategoryMode
    var itemSize: CGFloat {
        switch mode {
        case .full:
            return UIScreen.main.bounds.width - 20
        case .half:
            return UIScreen.main.bounds.width/2 - 30
        }
    }
    
    var body: some View {
        VStack {
            AsyncImage(url: URL(string: item.imageName))
                .frame(width: itemSize, height: itemSize)
                .padding(.horizontal, 10)
            if let title = item.title,
               let description = item.description {
                Text(title)
                    .modifier(Title2())
                Text(description)
                    .modifier(Description2())
            }
        }
    }
}

struct CategoryItemView_Previews: PreviewProvider {
    static let favoritePlaylistItems: [CategoryCell] =
        [.init(id: 1, imageName: "https://cdnimg.melon.co.kr/cm/photo/images/000/800/70/534/80070534_org.jpg/melon/quality/80/optimize", title: "우기's 플레이리스트", description: "VIBE"),
         .init(id: 2, imageName: "favorite2", title: "Kanye West 대표곡", description: "내가 만든 플레이리스트"),
         .init(id: 4, imageName: "favorite3", title: "Avicii 대표곡", description: "VIBE"),
        ]

    static var previews: some View {
        CategoryCellView(item: favoritePlaylistItems.first!, mode: .full)
        
    }
}
