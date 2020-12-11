//
//  RectangleCellInfoView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI

struct RectangleCellInfoView: View {
    var body: some View {
        ZStack(alignment: .topLeading) {
            Rectangle()
                .fill(Color.white)
            HStack {
                Text("EXO 카이가 솔로 데뷔곡 MV를 선공개했습니다.")
                    .multilineTextAlignment(.leading)
                    .font(.system(size: 18, weight: .bold))
                    .foregroundColor(.black)
                    .lineLimit(2)
                    .padding([.leading, .top])
                Spacer()
            }
            HStack {
                Spacer()
                Image(systemName: "play.circle")
                Text("음악듣기")
            }
            .foregroundColor(Color.pink)
            .padding(.trailing)
            .padding(.top, 64)
        }
        .frame(width: UIScreen.main.bounds.width - 20,
                height: UIScreen.main.bounds.width/4)
    }
}

struct RectangleCellInfoView_Previews: PreviewProvider {
    static var previews: some View {
        RectangleCellInfoView()
    }
}
