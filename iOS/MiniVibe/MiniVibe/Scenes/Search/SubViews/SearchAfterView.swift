//
//  SearchAfterView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/02.
//

import SwiftUI

struct SearchAfterView: View {
    @ObservedObject var viewModel: SearchViewModel
    
    var body: some View {
        SearchAfterCategoryView(type: .track, cellDatas: viewModel.tracks)
        SearchAfterCategoryView(type: .album, cellDatas: viewModel.albums)
        SearchAfterCategoryView(type: .artist, cellDatas: viewModel.artists)
    }
}
