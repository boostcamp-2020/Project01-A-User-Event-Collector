//
//  PlayerInfoView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/07.
//

import SwiftUI

struct PlayerInfoView: View {
    @Binding var timeDuration: Float
    @ObservedObject var viewModel: PlayerViewModel
    let track: Track
    
    var body: some View {
        VStack(spacing: 40) {
            SwipableImageView(urlString: track.coverURLString, 
                              coverData: track.coverData,
                              didSwipeLeft: {
                                viewModel.playNextTrack()
                              },
                              didSwipeRight: {
                                viewModel.playPreviousTrack()
                              })
            HStack {
                VStack(alignment: .leading, spacing: 10) {
                    Text(track.name)
                        .font(.system(size: 24, weight: .bold))
                    Text(track.artists?.first?.name ?? "")
                        .font(.system(size: 18, weight: .light))
                        .foregroundColor(.secondary)
                }
                Spacer()
            }
            Slider(value: $timeDuration)
                .padding(.bottom, 20.0)
                .accentColor(.red)
        }
    }
}

struct PlayerInfoView_Previews: PreviewProvider {
    static var previews: some View {
        PlayerInfoView(timeDuration: .constant(100),
                       viewModel: PlayerViewModel(manager: EventManager(serverEngine: nil,
                                                                            backupEngine: nil,
                                                                            alertEngine: nil)),
                       track: TestData.defaultTrack)
    }
}
