//
//  CategoryCellView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import SwiftUI

struct CategoryCellView: View {
    let item: CategoryItem
    let mode: CategoryMode
    var itemSize: CGFloat {
        switch mode {
        case .full:
            return UIScreen.main.bounds.width - 10
        case .half:
            return UIScreen.main.bounds.width/2 - 30
        }
    }
    var padding: CGFloat {
        switch mode {
        case .full:
            return 10
        case .half:
            return 5
            
        }
    }

    var body: some View {
        VStack(alignment: .leading) {
//            AsyncImage(url: URL(string: item.imageName ?? ""))
//                .frame(width: itemSize - padding, height: itemSize - padding)

            if let title = item.title {
                Text(title)
                    .modifier(Title2())
            }
            if let author = item.author {
                Text(author)
                    .modifier(Description2())

            }
            if  let description = item.description {
                Text(description.prefix(36))
                    .modifier(Description2())
            }
        }
        .padding(.leading, 20)

    }
}

struct CategoryItemView_Previews: PreviewProvider {
    
    static var previews: some View {
        CategoryCellView(item: TestData.categoryItem2, mode: .half)
    }
}
//414
