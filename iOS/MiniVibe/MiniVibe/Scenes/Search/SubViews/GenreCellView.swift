//
//  GenreCellView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI

struct GenreCellView: View {
    let title: String
    var didTouchCell: (() -> Void)?
    
    var body: some View {
        Button(action: {
            didTouchCell?()
        }, label: {
            HStack {
                RoundedRectangle(cornerRadius: 25, style: .continuous)
                    .frame(width: 6, height: 30)
                    .foregroundColor(.blue)
                Text(title)
                    .modifier(Title2())
                Spacer()
            }.modifier(TrackListButtonStyle())
        })
    }
}

struct GenreCellView_Previews: PreviewProvider {
    static var previews: some View {
        GenreCellView(title: "Title")
    }
}
