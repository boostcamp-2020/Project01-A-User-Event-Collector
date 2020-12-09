//
//  TrackCell.swift
//  DemoTrackView
//
//  Created by 강병민 on 2020/11/22.
//

import SwiftUI

struct TrackCellView: View {
    let hasAccessory: Bool
    let track: Track
    @EnvironmentObject var nowPlayingViewModel: PlayerViewModel
    @StateObject private var viewModel: TrackCellViewModel
    
    init(hasAccessory: Bool, track: Track) {
        self.hasAccessory = hasAccessory
        self.track = track
        _viewModel = StateObject(wrappedValue: TrackCellViewModel(track: track))
    }
    
    var body: some View {
        HStack {
            Button(action: {
                nowPlayingViewModel.update(with: track)
            }, label: {
                BasicRowCellView(title: track.name,
                                 subTitle: track.artist,
                                 coverURLString: track.coverURLString,
                                 coverData: track.coverData)
            })
            if hasAccessory {
                HStack(spacing: 20) {
                    HeartAccessory(isFavorite: viewModel.isFavorite, toggleFavorite: viewModel.didToggleFavorite)
                    EllipsisAssessory()
                }
            }
        }
    }
}

struct TrackCellView_Previews: PreviewProvider {
    
    static var previews: some View {
        let testTrack1 = TestData.playlist.tracks!.first!
        
        Group {
            TrackCellView(hasAccessory: true, track: testTrack1)
            
        }
        .previewLayout(.sizeThatFits)
    }
}
