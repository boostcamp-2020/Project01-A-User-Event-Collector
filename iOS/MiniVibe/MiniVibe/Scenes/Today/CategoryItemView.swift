//
//  CategoryItemView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import SwiftUI

struct CategoryItemView: View {
    let item: CategoryItem
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
            Image(item.imageName)
                .resizable()
                .cornerRadius(5)
                .frame(width: itemSize, height: itemSize)
                .padding(.horizontal, 10)
            if let title = item.title,
               let description = item.description {
                Text(title)
                    .font(.headline)
                Text(description)
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
        }
    }
}

struct CategoryItemView_Previews: PreviewProvider {
    static let favoritePlaylistItems: [CategoryItem] =
        [.init(id: 1, imageName: "favorite1", title: "잠못드는 밤", description: "VIBE"),
         .init(id: 2, imageName: "favorite2", title: "Kanye West 대표곡", description: "내가 만든 플레이리스트"),
         .init(id: 4, imageName: "favorite3", title: "Avicii 대표곡", description: "VIBE"),
        ]

    static var previews: some View {
        CategoryItemView(item: favoritePlaylistItems.first!, mode: .full)
        
    }
}
