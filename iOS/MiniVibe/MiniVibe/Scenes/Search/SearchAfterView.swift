//
//  SearchAfterView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/02.
//

import SwiftUI

struct SearchAfterView: View {
    private let searchText: String
    @StateObject private var viewModel = SearchAfterViewModel()
    
    init(searchText: String) {
        self.searchText = searchText
    }
    
    var body: some View {
        ScrollView {
            LazyVGrid(columns: [GridItem(.flexible())],
                      spacing: 40,
                      pinnedViews: [.sectionHeaders]) {
                Section(header: SearchBarView(defaultText: searchText)) {
                    if let tracks = viewModel.tracks {
                        SearchAfterCategoryView(type: .track, cellDatas: tracks)
                    }
                    if let albums = viewModel.albums {
                        SearchAfterCategoryView(type: .album, cellDatas: albums)
                    }
                    if let artists = viewModel.artists {
                        SearchAfterCategoryView(type: .artist, cellDatas: artists)
                    }
                }
            }
        }.padding()
        .onAppear {
            viewModel.fetch(searchText: searchText)
        }
    }
}

struct SearchAfterView_Previews: PreviewProvider {
    static var previews: some View {
        SearchAfterView(searchText: "우기")
    }
}
