//
//  TrackListView.swift
//  DemoTrackView
//
//  Created by 강병민 on 2020/11/22.
//

import SwiftUI

struct TrackListView: View {
    
    @ObservedObject private var viewModel = TrackListViewModel()
    
    var body: some View {
        List {
            ForEach(viewModel.tracks) { track -> TrackCell in
                var cell = TrackCell(track: track)
                cell.didToggleFavorite = {
                    viewModel.toggleIsFavorite(for: track.id)
                }
                return cell
            }
        }
        .onAppear(perform: {
            viewModel.fetchTracks()
        })
    }
}

struct TrackListView_Previews: PreviewProvider {
    static var previews: some View {
        TrackListView()
    }
}
