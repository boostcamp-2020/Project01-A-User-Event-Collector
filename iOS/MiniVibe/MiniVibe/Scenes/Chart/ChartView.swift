//
//  ChartView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/01.
//

import SwiftUI

struct ChartView: View {
    private let layout = [GridItem(.flexible())]
    
    var body: some View {
        ScrollView {
            LazyVGrid(columns: layout,
                      spacing: 20) {
                Section(header:
                            NavigationLink(
                            destination: PlaylistView()
                            ,
                            label: {
                                CategoryHeaderView(title: "오늘 TOP 100")
                            }))
                {
                    TrackPageView(id: 1)
                }
                      }
        }.padding()
    }
    
}
struct ChartView_Previews: PreviewProvider {
    static var previews: some View {
        ChartView()
    }
}

