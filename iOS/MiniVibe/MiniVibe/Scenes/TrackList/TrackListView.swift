//
//  TrackListView.swift
//  DemoTrackView
//
//  Created by 강병민 on 2020/11/22.
//

import SwiftUI

struct TrackListView: View {
    
    private let layout = [GridItem(.flexible())]
    private let tracks: [Track]
    
    @StateObject private var viewModel = TrackListViewModel()
    
    init(tracks: [Track]) {
        self.tracks = tracks
    }
    
    var body: some View {
        LazyVGrid(columns: layout) {
            ForEach(viewModel.tracks) { track -> TrackCellView in
                var cell = TrackCellView(hasAccessory: true, track: track)
                cell.didToggleFavorite = {
                    viewModel.toggleIsFavorite(for: track.id)
                }
                return cell
            }
            Rectangle()
                .clearBottom()
        }.onAppear() {
            viewModel.createTracks(tracks: tracks)
        }
    }
}

//struct TrackListView_Previews: PreviewProvider {
//    static var previews: some View {
//        TrackListView(id: 1)
//    }
//}
