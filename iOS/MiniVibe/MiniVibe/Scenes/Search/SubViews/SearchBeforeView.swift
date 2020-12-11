//
//  SearchBefore.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/05.
//

import SwiftUI

struct SearchBeforeView: View {
    var body: some View {
        VStack {
            RectangleListView()
            HStack {
                Text("장르")
                    .modifier(Title1())
                Spacer()
            }
            GenreListView()
        }
    }
}

struct SearchBefore_Previews: PreviewProvider {
    static var previews: some View {
        SearchBeforeView()
    }
}
