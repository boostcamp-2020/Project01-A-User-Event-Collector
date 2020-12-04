//
//  BasicRowCellView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/03.
//

import SwiftUI

struct BasicRowCellView: View {
    let title: String
    let subTitle: String?
    let coverURLString: String?
    
    var body: some View {
        HStack {
            URLImage(urlString: coverURLString)
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

struct TrackInfoView_Previews: PreviewProvider {
    static var previews: some View {
        BasicRowCellView(title: "title", subTitle: "artist", coverURLString: nil)
    }
}
