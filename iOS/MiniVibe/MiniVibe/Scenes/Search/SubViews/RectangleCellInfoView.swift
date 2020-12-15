//
//  RectangleCellInfoView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI

struct RectangleCellInfoView: View {
    var didPressPlayButton: (() -> Void)?
    var body: some View {
        ZStack(alignment: .topLeading) {
            Rectangle()
                .fill(Color.white)
            HStack {
                Text("아이유, 타이틀곡 ‘Blueming’ 티저공개... 미니 5집으로 컴백")
                    .multilineTextAlignment(.leading)
                    .font(.system(size: 18, weight: .bold))
                    .foregroundColor(.black)
                    .lineLimit(2)
                    .padding([.horizontal, .top])
                Spacer()
            }
            HStack {
                Spacer()
                Button(action: {
                    didPressPlayButton?()
                }, label: {
                    Image(systemName: "play.circle")
                    Text("음악듣기")
                })
                .foregroundColor(Color.pink)
                .padding(.trailing, 14)
            }
            .padding(.trailing, 14)
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
