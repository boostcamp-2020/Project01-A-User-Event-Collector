//
//  ChartView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/01.
//

import SwiftUI

struct ChartView: View {
    @StateObject private var viewModel = PlaylistViewModel()
    
    private let playlistID: Int
    private let layout = [GridItem(.flexible())]
    
    init(playlistID: Int) {
        self.playlistID = playlistID
    }
    
    var body: some View {
        NavigationView {
            ScrollView {
                LazyVGrid(columns: layout) {
                    if let tracks = viewModel.playlist?.tracks {
                        TrackHorizontalListView(tracks: tracks)
                    }
                }
            }
            .padding()
            .navigationTitle("차트")
        }.onAppear {
            viewModel.fetch(id: playlistID)
        }
    }
    
}
struct ChartView_Previews: PreviewProvider {
    static var previews: some View {
        ChartView(playlistID: 18)
    }
}

