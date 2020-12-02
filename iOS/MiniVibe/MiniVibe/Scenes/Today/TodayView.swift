//
//  TodayView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import SwiftUI

struct TodayView: View {
    private let router = TodayRouter()
    
    var body: some View {
        NavigationView {
            List {
                ForEach(TestData.categories) { category in
                    NavigationLink(
                        destination: router.getDestination(to: category.type),
                        label: {
                            CategoryView(category: category)
                        }
                    )
                }
                .listRowInsets(EdgeInsets())
                Rectangle()
                    .clearBottom()
            }.listStyle(PlainListStyle())
            .navigationTitle("VIBE")
        }
        .preferredColorScheme(.dark)
        .navigationViewStyle(StackNavigationViewStyle())
    }
}

struct TodayView_Previews: PreviewProvider {
    static var previews: some View {
        TodayView()
    }
}

