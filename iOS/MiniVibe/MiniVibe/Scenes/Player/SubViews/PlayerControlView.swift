//
//  PlayerControlView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/07.
//

import SwiftUI

struct PlayerControlView: View {
    @ObservedObject var viewModel: PlayerViewModel
    var didPressQueueButton: (()->Void)?
    
    var body: some View {
        VStack {
            HStack {
                ToggleableImage(isEnabled: $viewModel.isRepeat,
                                imageWhenTrue: "repeat",
                                imageWhenFalse: "repeat",
                                size: .medium)
                Spacer()
                Button(action: {}, label: {
                    Image(systemName: "paperplane")
                        .accesoryModifier(color: .gray, size: .large)
                    //                        .font(Font.title.weight(.light))
                })
                .accentColor(.primary)
                Spacer()
                ToggleableImage(isEnabled: $viewModel.isPlaying,
                                imageWhenTrue: "pause",
                                imageWhenFalse: "play",
                                size: .large)
                .accentColor(.primary)
                Spacer()
                Button(action: {}, label: {
                    Image(systemName: "heart")
                        .accesoryModifier(color: .red, size: .large)
                })
                .accentColor(.red)
                Spacer()
                ToggleableImage(isEnabled: $viewModel.isShuffle,
                                imageWhenTrue: "shuffle",
                                imageWhenFalse: "shuffle",
                                size: .medium)
            }
            .padding(.vertical, 10)
            HStack(alignment: .bottom) {
                Button(action: {
                    print(viewModel.queue)
                }, label: {
                    Image(systemName: "airplayaudio")
                        .accesoryModifier(color: .gray, size: .medium)
                })
                
                Spacer()
                Text("미리듣기 중")
                    .foregroundColor(.red)
                Spacer()
                Button(action: {
                    self.didPressQueueButton?()
                }, label: {
                    Image(systemName: "music.note.list")
                        .accesoryModifier(color: .gray, size: .medium)
                })
            }
            .padding(.top, 20)
            .padding(.bottom, 10)
        }
    }
    
}
