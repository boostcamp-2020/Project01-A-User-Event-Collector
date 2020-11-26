//
//  CategoryInfoView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import SwiftUI

struct CategoryInfoView: View {
    let title: String
    var body: some View {
        HStack(alignment: .firstTextBaseline) {
            Text(title)
                .font(.headline)
                .padding(.leading, 15)
                .padding(.top, 5)
            Spacer()
            Text("더보기")
                .font(.subheadline)
                .padding(.trailing, 15)
                .padding(.top, 5)
        }
    }
}
