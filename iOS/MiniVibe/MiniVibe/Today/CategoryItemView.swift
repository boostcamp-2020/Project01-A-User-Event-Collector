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
            return UIScreen.main.bounds.width - 50
        case .half:
            return UIScreen.main.bounds.width/2 - 30
        }
    }
    
    var body: some View {
        VStack {
            Image(systemName: "play.circle")
                .resizable()
                .cornerRadius(5)
                .padding()
                .frame(width: itemSize, height: itemSize)
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
    static var previews: some View {
        /*@START_MENU_TOKEN@*/Text("Hello, World!")/*@END_MENU_TOKEN@*/
    }
}
