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

    var body: some View {
        HStack {
            Button(action: {
                self.showMediaPlayer.toggle()
            }, label: {
                TrackInfoView(title: viewModel.currentTrack.title, artist: viewModel.currentTrack.artist)
                    .padding(.all, 9)
            }).fullScreenCover(isPresented: $showMediaPlayer, content: {
                PlayerView(viewModel: viewModel, showMediaPlayer: $showMediaPlayer)
            })
            HStack(spacing: 20) {
                Button(action: {}, label: {
                    Image(systemName: "play.fill")
                        .accesoryModifier(color: .gray, size: .small)
                })
                Button(action: {}, label: {
                    Image(systemName: "forward.fill")
                        .accesoryModifier(color: .gray, size: .small)
                })
            }
            .padding(.horizontal, 20)
        }
        .background(BlurView())
    }
}

struct NowPlayingView_Previews: PreviewProvider {
    static var previews: some View {
        NowPlayingView(viewModel: PlayerViewModel())
    }
}
