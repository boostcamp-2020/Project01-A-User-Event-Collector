//
//  SearchBarView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI

struct SearchBarView: View {
    @State private var text: String = ""
    @State private var isEditing = false
    @State private var isPushed = false
    
    init(defaultText: String) {
        self.text = defaultText
    }
    
    var body: some View {
        HStack {
            TextField("검색어를 입력해 주세요.", text: $text) { isEditing in
                self.isEditing = isEditing
            } onCommit: {
                isPushed = true
            }.sheet(isPresented: $isPushed) {
                SearchAfterView(searchText: text)
            }
            .padding(9)
            .padding(.horizontal, 27)
            .background(Color(.systemGray6))
            .cornerRadius(8)
            //                .padding(.horizontal, 10)
            //                .onTapGesture {
            //                    self.isEditing = true
            //                }
            .overlay(
                HStack {
                    Image(systemName: "magnifyingglass")
                        .foregroundColor(.gray)
                        .frame(minWidth: 0, maxWidth: .infinity, alignment: .leading)
                        .padding(.leading, 12)
                    if !isEditing {
                        Image(systemName: "music.note")
                            .foregroundColor(.gray)
                            .padding(.trailing, 12)
                    }
                }
            )
            
            if isEditing {
                Button(action: {
                    isEditing = false
                    text = ""
                }, label: {
                    Text("취소")
                })
                .padding(.trailing, 10)
                .transition(.move(edge: .trailing))
                .animation(.default)
            }
        }
    }
}

struct SearchBarView_Previews: PreviewProvider {
    static var previews: some View {
        SearchBarView(defaultText: "")
    }
}
