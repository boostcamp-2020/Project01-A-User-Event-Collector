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
                Text("BoostCamp 01_A 팀 사용자 이벤트 수집기 DIVE 선보여...")
                    .multilineTextAlignment(.leading)
                    .font(.system(size: 18, weight: .bold))
                    .foregroundColor(.black)
                    .lineLimit(2)
                    .padding([.horizontal, .top])
                Spacer()
            }
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
