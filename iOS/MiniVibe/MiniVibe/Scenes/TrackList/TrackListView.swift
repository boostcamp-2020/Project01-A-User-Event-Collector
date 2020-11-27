//
//  TrackListView.swift
//  DemoTrackView
//
//  Created by 강병민 on 2020/11/22.
//

import SwiftUI

struct TrackListView: View {
    
    @StateObject private var viewModel = TrackListViewModel()
    
    var body: some View {
        List {
            ForEach(viewModel.tracks) { track -> TrackCellView in
                var cell = TrackCellView(track: track)
                cell.didToggleFavorite = {
                    viewModel.toggleIsFavorite(for: track.id)
                }
                return cell
            }
        }
        .modifier(NavigationBarStyle(title: "노래 목록"))
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
