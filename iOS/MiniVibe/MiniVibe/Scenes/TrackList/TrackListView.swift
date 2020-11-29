//
//  TrackListView.swift
//  DemoTrackView
//
//  Created by 강병민 on 2020/11/22.
//

import SwiftUI

struct TrackListView: View {
    
    private let id: Int
    @StateObject private var viewModel = TrackListViewModel()
    
    init(id: Int) {
        self.id = id
    }
    
    var body: some View {
        LazyVStack {
            ForEach(viewModel.tracks) { track -> TrackCellView in
                var cell = TrackCellView(track: track)
                cell.didToggleFavorite = {
                    viewModel.toggleIsFavorite(for: track.id)
                }
                return cell
            }
        }
//        .modifier(NavigationBarStyle(title: ""))
        .onAppear(perform: {
            viewModel.fetchTracks(id: id)
        })
    }
}

struct TrackListView_Previews: PreviewProvider {
    static var previews: some View {
        TrackListView(id: 1)
    }
}
