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
    @State var timeDuration = Float(180)
    
    var body: some View {
        GeometryReader { geometry in
            ScrollView(.vertical, showsIndicators: false) {
                VStack(spacing: 10) {
                    PlayerHeaderView(showMediaPlayer: $showMediaPlayer)
                    if let track = viewModel.currentTrack {
                        PlayerInfoView(timeDuration: $timeDuration, viewModel: viewModel, track: track)
                    }
                    PlayerControlView(viewModel: viewModel)
                }
                .padding(.horizontal, 20)
                .padding(.bottom, geometry.safeAreaInsets.bottom)
                .frame(height: geometry.size.height)

                LazyVGrid(columns: [GridItem(.flexible())]) {
                    ForEach(viewModel.queue) { track in
                        TrackCellView(hasAccessory: true, track: track, isCellForQueue: true)
                            .padding(.vertical, 5)
                    }
                    .onMove(perform: viewModel.reorder(from:to:))
                    Rectangle()
                        .clearBottom()
                }
                .padding(.horizontal, 20)

            }
            .background(Color(UIColor.systemBackground))
            .preferredColorScheme(.dark)
        }
        .edgesIgnoringSafeArea(.bottom)
        .onAppear {
            viewModel.manager.log(ScreenEvent.playerPushed)
        }
        .onDisappear {
            viewModel.manager.log(ScreenEvent.playerPopped)
        }
    }
}

//struct PlayerView_Previews: PreviewProvider {
//    static var previews: some View {
//        Group {
//            PlayerView(viewModel: PlayerViewModel(), showMediaPlayer: .constant(true))
//                .colorScheme(.dark)
//            //작은 화면 프리뷰
//            PlayerView(viewModel: PlayerViewModel(), showMediaPlayer: .constant(true))
//                .previewDevice("iPhone 8")
//        }
//    }
//}
