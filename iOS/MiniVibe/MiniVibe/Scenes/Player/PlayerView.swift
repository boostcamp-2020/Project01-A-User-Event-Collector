//
//  PlayerView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/28.
//

import SwiftUI

struct PlayerView: View {
    @ObservedObject var viewModel : PlayerViewModel
    @Binding var showMediaPlayer: Bool

    var body: some View {
        GeometryReader { geometry in
            ScrollView(.vertical, showsIndicators: false) {
                VStack() {
                    PlayerHeaderView(showMediaPlayer: $showMediaPlayer)
                    Spacer()
                    PlayerInfoView(track: viewModel.currentTrack)
                    Spacer()
                    PlayerControlView(viewModel: viewModel)
                }
                .frame(height: geometry.size.height)
                //TODO: 밑에 재생 queue에 있는 노래 목록 보여주기
            }
            .frame(height: geometry.size.height)
        }
    }
}

struct PlayerInfoView: View {
    let track: Track
    
    var body: some View {
        VStack(spacing: 40) {
            AsyncImage(url: URL(string: track.album.cover ?? ""))
                .padding()
            HStack {
                VStack (alignment: .leading){
                    Text(track.trackName)
                        .modifier(Title2())
                    Text(track.album.name)
                        .modifier(Description2())
                }
                Spacer()
                Image(systemName: "ellipsis")
                    .accesoryModifier(color: .gray, size: .medium)
            }
            .padding(.horizontal, 10)
        }
    }
}

struct PlayerControlView: View {
    @ObservedObject var viewModel : PlayerViewModel
    
    var body: some View {
        VStack {
            HStack(spacing: 20) {
                Button(action: {}, label: {
                    Image(systemName: "repeat")
                        .resizeToFit(padding: 15)
                })
                .accentColor(.primary)
                Button(action: {}, label: {
                    Image(systemName: "paperplane")
                        .resizeToFit(padding: 5)
                        .font(Font.title.weight(.light))
                })
                .accentColor(.primary)
                Button(action: {}, label: {
                    Image(systemName: "play")
                        .resizeToFit(padding: 5)
                        .font(Font.title.weight(.light))
                })
                .accentColor(.primary)

                Button(action: {}, label: {
                    Image(systemName: "heart")
                        .resizeToFit(padding: 5)
                })
                .accentColor(.red)

                Button(action: {}, label: {
                    Image(systemName: "shuffle")
                        .resizeToFit(padding: 15)
                })
                .accentColor(.primary)
            }
            HStack {
                Spacer()
                Button(action: {
                    print(viewModel.queue)
                }, label: {
                    Image(systemName: "music.note.list")
                        .accesoryModifier(color: .gray, size: .medium)
                        .padding()
                })
            }
        }
    }
    
}

struct PlayerHeaderView: View {
    @Binding var showMediaPlayer: Bool

    var body: some View {
        HStack() {
            Image(systemName: "flame")
                .accesoryModifier(color: .secondary, size: .medium)
            Spacer()
            Text("플레이리스트 제목")
            Spacer()
            Button(action: {
                showMediaPlayer.toggle()
            }, label: {
                Image(systemName: "chevron.down")
                    .accesoryModifier(color: .secondary, size: .medium)
                
            })
        }
        .padding()
    }
}

struct PlayerView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            PlayerView(viewModel: PlayerViewModel(), showMediaPlayer: .constant(true))
            //작은 화면 프리뷰
//            PlayerView(viewModel: PlayerViewModel(), showMediaPlayer: .constant(true))
//                .previewDevice("iPhone 8")
        }
    }
}
