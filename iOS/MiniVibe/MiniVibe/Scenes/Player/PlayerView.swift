//
//  PlayerView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/28.
//

import SwiftUI

struct PlayerView: View {
    @ObservedObject var viewModel: PlayerViewModel
    @Binding var showMediaPlayer: Bool
    @State private var timeDuration = Float(180)
    
    var body: some View {
        GeometryReader { [weak viewModel = self.viewModel] geometry in
            if let viewModel = viewModel {
                ScrollView(.vertical, showsIndicators: false) {
                    ScrollViewReader { value in
                        VStack(spacing: 10) {
                            PlayerHeaderView(showMediaPlayer: $showMediaPlayer)
                            if let track = viewModel.currentTrack {
                                PlayerInfoView(timeDuration: $timeDuration, viewModel: viewModel, track: track)
                            }
                            PlayerControlView(viewModel: viewModel) {
                                value.scrollTo(10)
                            }
                        }
                        .padding(.horizontal, 20)
                        .padding(.bottom, geometry.safeAreaInsets.bottom)
                        .frame(height: geometry.size.height)

                        LazyVGrid(columns: [GridItem(.flexible())]) {
                            ForEach(viewModel.queue) { track in
                                TrackCellView(hasHeartAccessory: false,
                                              hasDeleteAccessory: true,
                                              track: track,
                                              isCellForQueue: true)
                                    .padding(.vertical, 5)
                            }
                            .onMove(perform: viewModel.reorder(from:to:))
                            Rectangle()
                                .clearBottom()
                        }
                        .padding(.horizontal, 20)
                    }
                }
                .background(Color(UIColor.systemBackground))
                .preferredColorScheme(.dark)
            }
        }
        .edgesIgnoringSafeArea(.bottom)
        .onAppear { [weak viewModel = self.viewModel] in
            viewModel?.manager.log(ScreenEvent.playerPushed)
            viewModel?.closePlayerView = {
                showMediaPlayer = false
            }
        }
        .onDisappear { [weak viewModel = self.viewModel] in
            viewModel?.manager.log(ScreenEvent.playerPopped)
        }
    }
}
