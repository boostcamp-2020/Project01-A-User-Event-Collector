//
//  SearchView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI
import Combine

struct SearchView: View {
    @StateObject private var viewModel: SearchViewModel
    private let manager: AnalyticsManager
    private let layout = [GridItem(.flexible())]
    
    init(manager: AnalyticsManager) {
        self.manager = manager
        _viewModel = StateObject(wrappedValue: SearchViewModel(manager: manager))
    }

    var body: some View {
        NavigationView {
            ScrollView(showsIndicators: false) {
                LazyVGrid(columns: layout,
                          spacing: 20,
                          pinnedViews: [.sectionHeaders]) {
                    Section(header: SearchBarView(viewModel: viewModel)) {
                        if viewModel.isEditing {
                            SearchAfterView(viewModel: viewModel)
                        } else {
                            SearchBeforeView()
                        }
                    }
                    Rectangle()
                        .clearBottom()

                }
                .padding()
            }
            .navigationTitle("검색")
        }
    }
}

//struct SearchView_Previews: PreviewProvider {
//    static var previews: some View {
//        SearchView(manager: AnalyticsManager(engine: MockAnalyticsEngine()))
//    }
//}
