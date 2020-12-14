//
//  TabIconView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/07.
//

import SwiftUI

struct TabIconView: View {
    let height: CGFloat
    let imageName: String
    let labelText: String
    let tab: MiniVibeTab
    var iconHeight: CGFloat {
        height * 0.3
    }
    
    @Binding var selectedTab: MiniVibeTab
    
    var body: some View {
        VStack(alignment: .center) {
            Image(systemName: imageName)
                .resizable()
                .aspectRatio(contentMode: .fit)
                .foregroundColor(self.selectedTab == tab ? .red : .gray)
                .frame(width: iconHeight, height: iconHeight)
                .padding(.top, 20)
                .padding(.horizontal, 15)
            if let labelText = labelText {
                Text(labelText)
                    .padding(.bottom, 5)
                    .foregroundColor(self.selectedTab == tab ? .red : .gray)
                    .modifier(Description1())
            }
        }
        .onTapGesture {
            selectedTab = tab
        }
    }
}
