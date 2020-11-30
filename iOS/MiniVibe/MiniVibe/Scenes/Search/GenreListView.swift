//
//  GenreListView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI

struct GenreListView: View {
    private let layout = [
        GridItem(.flexible()),
        GridItem(.flexible())
    ]
    
    var body: some View {
        ScrollView {
            LazyVGrid(columns: layout,
                      spacing: 10) {
                GenreCellView()
                GenreCellView()
                GenreCellView()
                GenreCellView()
                GenreCellView()
                GenreCellView()
                GenreCellView()
                GenreCellView()
                GenreCellView()
                GenreCellView()
            }
        }
    }
}

struct GenreListView_Previews: PreviewProvider {
    static var previews: some View {
        GenreListView()
    }
}
