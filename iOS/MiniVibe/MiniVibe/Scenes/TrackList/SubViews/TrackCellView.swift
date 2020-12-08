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
    @StateObject private var viewModel = TrackCellViewModel()
    @State var isFavorite = false
    
    init(hasAccessory: Bool, track: Track) {
        self.hasAccessory = hasAccessory
        self.track = track
    }
    
    var body: some View {
        HStack {
            Button(action: {
                nowPlayingViewModel.updateWith(track: track)
            }, label: {
                BasicRowCellView(title: track.name,
                                 subTitle: track.artists?.first?.name ?? "",
                                 coverURLString: track.album?.cover)
            })
            if hasAccessory {
                HStack(spacing: 20) {
                    HeartAccessory(isFavorite: $isFavorite, toggleFavorite: didToggleFavorite)
                    EllipsisAssessory()
                }
            }
            
        }
    }
    
    func didToggleFavorite() {
        viewModel.update(with: track)
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
