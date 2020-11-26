//
//  EllipsisAccessoryView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/23.
//

import SwiftUI

struct EllipsisAccessoryView: View {
    var body: some View {
        Button(action: {
            print("show menu")
            
        }, label: {
            Image(systemName: "ellipsis")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 20, height: 20, alignment: .center)
                .accentColor(.gray)

        })
        .buttonStyle(BorderlessButtonStyle())
    }
}


struct EllipsisAccessoryView_Previews: PreviewProvider {
    static var previews: some View {
        EllipsisAccessoryView()
    }
}
