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
        ScrollView(.vertical) {
            VStack {
                PlayerInfoView(track: viewModel.currentTrack, showMediaPlayer: $showMediaPlayer)
                PlayerControlView(viewModel: viewModel)
            }
            //TODO: 밑에 재생 queue에 있는 노래 목록 보여주기
        }
     }
}

struct PlayerInfoView: View {
    let track: Track
    @Binding var showMediaPlayer: Bool
    
    var body: some View {
        VStack(spacing: 40) {
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
            Image(track.title)
                .fitModifier()
            HStack {
                VStack (alignment: .leading){
                    Text(track.title)
                        .modifier(Title())
                    Text(track.artist)
                        .modifier(Description())
                }
                Spacer()
                Image(systemName: "ellipsis")
                    .accesoryModifier(color: .gray, size: .medium)
            }
            .padding()
        }
    }
}

struct PlayerControlView: View {
    @ObservedObject var viewModel : PlayerViewModel

    var body: some View {
        HStack(spacing: 20) {
            Image(systemName: "repeat")
                .resizable()
                .scaledToFit()
                .padding(.all, 15)
            Image(systemName: "paperplane")
                .resizable()
                .scaledToFit()
            Image(systemName: "play")
                .resizable()
                .scaledToFit()
            Image(systemName: "heart")
                .resizable()
                .scaledToFit()
            Image(systemName: "shuffle")
                .resizable()
                .scaledToFit()
                .padding(.all, 15)
        }
        .padding(.all, 10)
        HStack {
            Spacer()
            Button(action: {
                print(viewModel.queue)
            }, label: {
                Image(systemName: "music.note.list")
                    .accesoryModifier(color: .gray, size: .large)
                    .padding()
            })
        }
    }
    
}

struct PlayerView_Previews: PreviewProvider {
    static var previews: some View {
        PlayerView(viewModel: PlayerViewModel(), showMediaPlayer: .constant(true))
    }
}
