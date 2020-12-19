//
//  TrackCell.swift
//  DemoTrackView
//
//  Created by 강병민 on 2020/11/22.
//

import SwiftUI

struct TrackCellView: View {
    let hasDownloadAccessory: Bool
    let hasDeleteAccessory: Bool
    let isCellForQueue: Bool
    let track: Track
    @EnvironmentObject var nowPlayingViewModel: PlayerViewModel
    @StateObject private var viewModel: TrackCellViewModel
    
    init(hasHeartAccessory: Bool,
         hasDeleteAccessory: Bool = false,
         track: Track,
         isCellForQueue: Bool = false) {
        self.hasDownloadAccessory = hasHeartAccessory
        self.hasDeleteAccessory = hasDeleteAccessory
        self.track = track
        self.isCellForQueue = isCellForQueue
        _viewModel = StateObject(wrappedValue: TrackCellViewModel(track: track))
    }
    
    var body: some View {
        HStack {
            Button(action: {
                if isCellForQueue {
                    nowPlayingViewModel.changeCurrentTrackInQueue(to: track)
                } else {
                    nowPlayingViewModel.update(with: track)
                }
            }, label: {
                BasicRowCellView(title: track.name,
                                 subTitle: track.artist,
                                 coverURLString: track.coverURLString,
                                 coverData: track.coverData)
            })
            if hasDownloadAccessory {
                DownloadAccessory(isSavedToLibrary: viewModel.isSavedToLibrary, toggleLiked: viewModel.didToggleLiked)
            }
            if hasDeleteAccessory {
                DeleteAccessory {
                    nowPlayingViewModel.didToggleTrash(id: track.id)
                }
            }
        }
    }
}

struct TrackCellView_Previews: PreviewProvider {
    
    static var previews: some View {
        let testTrack1 = TestData.playlist.tracks!.first!
        
        Group {
            TrackCellView(hasHeartAccessory: true, track: testTrack1)
            
        }
        .previewLayout(.sizeThatFits)
    }
}
