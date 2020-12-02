//
//  ChartView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/01.
//

import SwiftUI

struct ChartView: View {
    let tracks: [Track]
    
    var body: some View {
        NavigationView {
            ScrollView {
                LazyVGrid(columns: [ GridItem(.flexible()) ]) {
                    TrackHorizontalListView(tracks: tracks)
                    
                }
            }
            .padding()
            .navigationTitle("차트")
        }
    }
    
}
struct ChartView_Previews: PreviewProvider {
    static var previews: some View {
        ChartView(tracks: TestData.playlist.tracks!)
    }
}

