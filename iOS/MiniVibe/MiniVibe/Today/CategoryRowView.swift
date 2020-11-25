//
//  CategoryRowView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import SwiftUI

struct CategoryRowView: View {
    let category: Category
    
    var body: some View {
        VStack(alignment: .leading) {
            CategoryInfoView(title: category.title)
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(alignment: .top, spacing: 20) {
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
            return AnyView(Text("매거진 목록 화면 보여주기"))
        case .playlist:
            return AnyView(Text("플레이리스트 목록 화면 보여주기"))
        default:
            return AnyView(Text("기본 화면"))
        }
    }
    
}

struct CategoryRowView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            CategoryRowView(category: Category(title: "Station", type: .station, mode: .half))
        }
    }
}

