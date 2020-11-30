//
//  SearchView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI

struct SearchView: View {
    private let layout = [GridItem(.flexible())]
    
    var body: some View {
        ScrollView {
            LazyVGrid(columns: layout,
                      spacing: 20,
                      pinnedViews: [.sectionHeaders]) {
                Section(header: SearchBarView(text: .constant(""))) {
                    RectangleListView()
                    HStack {
                        Text("장르")
                            .modifier(Title1())
                        Spacer()
                    }
                    GenreListView()
                }
            }
        }.navigationTitle("검색")
        .padding()
    }
}

struct SearchView_Previews: PreviewProvider {
    static var previews: some View {
        SearchView()
    }
}
