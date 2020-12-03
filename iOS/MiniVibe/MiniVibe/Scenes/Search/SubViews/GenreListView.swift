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
        LazyVGrid(columns: layout,
                  spacing: 10) {
            GenreCellView(title: "국내 댄스")
            GenreCellView(title: "국내 발라드")
            GenreCellView(title: "국내 락/메탈")
            GenreCellView(title: "국내 알앤비/소울")
            GenreCellView(title: "국내 Pop")
            GenreCellView(title: "국내 K-Pop")
            GenreCellView(title: "국내 일레트로닉")
            GenreCellView(title: "국내 힙합")
            GenreCellView(title: "국내 재즈")
            GenreCellView(title: "국내 인디")
        }
    }
}

struct GenreListView_Previews: PreviewProvider {
    static var previews: some View {
        GenreListView()
    }
}
