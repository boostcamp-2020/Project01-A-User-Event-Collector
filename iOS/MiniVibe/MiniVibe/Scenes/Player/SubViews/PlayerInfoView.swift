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
                Image(systemName: "ellipsis")
                    .accesoryModifier(color: .gray, size: .medium)
            }
            Slider(value: $timeDuration)
                .padding(.bottom, 20.0)
                .accentColor(.red)
        }
    }
}

//struct PlayerInfoView_Previews: PreviewProvider {
//    static var previews: some View {
//        PlayerInfoView(timeDuration: .constant(0),
//                       viewModel: PlayerViewModel(manager: AnalyticsManager(engine: MockAnalyticsEngine())),
//                       track: TestData.defaultTrack)
//    }
//}

struct SwipableImageView: View {
    @State private var offset: CGSize = .zero
    
    let urlString: String?
    let coverData: Data? 
    var didSwipeLeft: (() -> Void)?
    var didSwipeRight: (() -> Void)?
    
    var body: some View {
        SwappableImageWithURL(urlString, data: coverData)
            .padding()
            .highPriorityGesture(
                DragGesture(minimumDistance: 20, coordinateSpace: .local)
                    .onChanged { gesture in
                        self.offset = gesture.translation
                    }
                    .onEnded { _ in
                        if self.offset.width > 30 {
                            self.didSwipeRight?()
                        }
                        if self.offset.width < -30 {
                            self.didSwipeLeft?()
                        }
                    }
            )
    }
}
