//
//  RectangleSlideCellView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI

struct RectangleCellView: View {
    private let manager: AnalyticsManager
    init(manager: AnalyticsManager) {
        self.manager = manager
    }
    
    var body: some View {
        Button(action: {
            manager.log(ButtonEvent.newsTouched)
        }, label: {
            ZStack(alignment: .bottomLeading) {
                Image("logo")
                    .resizable()
                    .scaledToFill()
                    .frame(width: UIScreen.main.bounds.width - 20, height: UIScreen.main.bounds.width/2)
                RectangleCellInfoView()
            }
        })
    }
}

struct RectangleCellView_Previews: PreviewProvider {
    static var previews: some View {
        RectangleCellView(manager: AnalyticsManager(serverEngine: nil, backupEngine: nil, alertEngine: nil))
    }
}
