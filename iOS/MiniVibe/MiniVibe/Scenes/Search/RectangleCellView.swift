//
//  RectangleSlideCellView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI

struct RectangleCellView: View {
    var body: some View {
        ZStack(alignment: .bottomLeading) {
            Image(systemName: "person.fill")
                .resizable()
                .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.width/2)
            RectangleCellInfoView()
        }
    }
}

struct RectangleCellView_Previews: PreviewProvider {
    static var previews: some View {
        RectangleCellView()
    }
}
