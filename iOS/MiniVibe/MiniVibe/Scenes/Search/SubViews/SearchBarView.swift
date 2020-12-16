//
//  SearchBarView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI
import DiveEventCollector

struct SearchBarView: View {
    @ObservedObject var viewModel: SearchViewModel
    
    var body: some View {
        HStack {
            TextField("검색어를 입력해주세요",
                      text: $viewModel.searchText,
                      onEditingChanged: { isEditing in
                        withAnimation {
                            viewModel.isEditing = isEditing
                        }},
                      onCommit: {
                        viewModel.reset()
                      })
                .padding(.vertical, 12)
                .padding(.horizontal, 34)
                .background(Color(.systemGray6))
                .cornerRadius(8)
                .overlay(
                    HStack {
                        Image(systemName: "magnifyingglass")
                            .foregroundColor(.gray)
                            .frame(minWidth: 0, maxWidth: .infinity, alignment: .leading)
                            .padding(.leading, 12)
                    }
                )
                .zIndex(2)
            
            if viewModel.isEditing {
                Button(action: {
                    withAnimation {
                        viewModel.reset()
                    }
                    UIApplication.shared.sendAction(#selector(UIResponder.resignFirstResponder),
                                                    to: nil,
                                                    from: nil,
                                                    for: nil)
                }, label: {
                    Text("취소")
                })
                .zIndex(1)
            }
        }.background(Color(UIColor.systemBackground))
    }
}

struct SearchBarView_Previews: PreviewProvider {
    static var previews: some View {
        SearchBarView(viewModel: SearchViewModel(manager: EventManager(serverEngine: nil, backupEngine: nil, alertEngine: nil)))
    }
}
