//
//  RectangleListView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI

struct RectangleListView: View {
    private let layout = [GridItem(.flexible())]
    
    var body: some View {
        ScrollView(.horizontal) {
            LazyHGrid(rows: layout,
                      spacing: 20) {
                RectangleCellView()
                RectangleCellView()
                RectangleCellView()
                RectangleCellView()
                RectangleCellView()
                RectangleCellView()
                RectangleCellView()
            }
        }
    }
}

struct RectangleListView_Previews: PreviewProvider {
    static var previews: some View {
        RectangleListView()
    }
}
