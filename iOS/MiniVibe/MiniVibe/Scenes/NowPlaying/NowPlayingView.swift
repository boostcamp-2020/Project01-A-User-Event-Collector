//
//  NowPlayingView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/27.
//

import SwiftUI

struct NowPlayingView: View {
    @ObservedObject var viewModel: PlayerViewModel
    @State private var showMediaPlayer = false
    @GestureState private var dragAmount = CGSize.zero
    
    var body: some View {
        HStack {
            Button(action: {
                if viewModel.currentTrack != nil {
                    self.showMediaPlayer.toggle()
                }
            }, label: {
                BasicRowCellView(title: viewModel.trackName,
                                 subTitle: viewModel.artist,
                                 coverURLString: viewModel.coverURLString,
                                 coverData: viewModel.coverData)
                    .padding(.all, 9)
            }).sheet(isPresented: $showMediaPlayer, content: {
                PlayerView(viewModel: viewModel, showMediaPlayer: $showMediaPlayer)
            })
            HStack(spacing: 20) {
                ToggleableImage(isEnabled: $viewModel.isPlaying,
                                imageWhenTrue: "pause",
                                imageWhenFalse: "play.fill",
                                size: .medium)
                Button(action: {}, label: {
                    Image(systemName: "forward.fill")
                        .accesoryModifier(color: .gray, size: .small)
                })
            }
            .padding(.horizontal, 20)
        }
        .background(BlurView())
        .preferredColorScheme(.dark)
    }
}

struct NowPlayingView_Previews: PreviewProvider {
    static var previews: some View {
        NowPlayingView(viewModel: PlayerViewModel(manager: AnalyticsManager(engine: MockAnalyticsEngine())))
    }
}
