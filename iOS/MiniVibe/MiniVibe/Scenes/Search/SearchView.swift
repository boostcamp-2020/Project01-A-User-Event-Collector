//
//  SearchView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI
import Combine

struct SearchView: View {
    @StateObject private var viewModel = SearchViewModel()
    private let layout = [GridItem(.flexible())]
    
    var body: some View {
        ScrollView(showsIndicators: false) {
            LazyVGrid(columns: layout,
                      spacing: 20,
                      pinnedViews: [.sectionHeaders]) {
                Section(header: SearchBarView(viewModel: viewModel)) {
                    if viewModel.isEditing {
                        SearchAfterView(viewModel: viewModel)
                            .animation(.easeIn)
                            .transition(.slide)
                    } else {
                        SearchBeforeView()
                    }
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
