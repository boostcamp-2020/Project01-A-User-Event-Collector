//
//  SwappableRowView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/11.
//

import SwiftUI

struct SwappableRowView: View {
    let title: String
    let subTitle: String?
    let coverURLString: String?
    let coverData: Data?
    
    var body: some View {
        HStack {
            SwappableImageWithURL(coverURLString, data: coverData)
                .frame(width: 44, height: 44, alignment: .center)
                .padding(.vertical, 2)
            VStack(alignment: .leading) {
                Text(title)
                    .modifier(Title2())
                if let subTitle = subTitle {
                    Text(subTitle)
                        .modifier(Description2())
                }
            }
            Spacer()
        }
    }
}
