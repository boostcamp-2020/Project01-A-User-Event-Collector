//
//  SearchView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI
import Combine
import DiveEventCollector

struct SearchView: View {
    @StateObject private var viewModel: SearchViewModel
    private let manager: EventManager
    private let layout = [GridItem(.flexible())]
    
    init(manager: EventManager) {
        self.manager = manager
        _viewModel = StateObject(wrappedValue: SearchViewModel(manager: manager))
    }
    
    var body: some View {
        NavigationView {
            ScrollView(showsIndicators: false) {
                LazyVGrid(columns: layout,
                          spacing: 20,
                          pinnedViews: [.sectionHeaders]) { [weak viewModel = self.viewModel,
                                                             weak manager = self.manager] in
                    if let viewModel = viewModel,
                       let manager = manager {
                        Section(header: SearchBarView(viewModel: viewModel)) {
                            if viewModel.isEditing {
                                SearchAfterView(viewModel: viewModel)
                                    .animation(.easeInOut)
                            } else {
                                SearchBeforeView(manager: manager)
                            }
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
