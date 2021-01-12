//
//  TrackCell.swift
//  DemoTrackView
//
//  Created by 강병민 on 2020/11/22.
//

import SwiftUI

struct TrackCellView: View {
    private let hasDownloadAccessory: Bool
    private let hasDeleteAccessory: Bool
    private let isCellForQueue: Bool
    private let track: Track
    @EnvironmentObject private var nowPlayingViewModel: PlayerViewModel
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
        HStack { [weak nowPlayingViewModel = self.nowPlayingViewModel, weak viewModel = self.viewModel] in
            if let nowPlayingViewModel = nowPlayingViewModel,
               let viewModel = viewModel {
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
                    DownloadAccessory(isSavedToLibrary: viewModel.isSavedToLibrary,
                                      toggleLiked: viewModel.didToggleLikedAccessory)
                }
                if hasDeleteAccessory {
                    DeleteAccessory {
                        nowPlayingViewModel.didToggleDeleteAccessory(id: track.id)
                    }
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
