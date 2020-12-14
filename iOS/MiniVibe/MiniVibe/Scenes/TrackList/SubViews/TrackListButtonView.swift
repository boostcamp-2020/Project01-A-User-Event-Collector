//
//  TrackListButtonView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/28.
//

import SwiftUI

struct TrackListButtonView: View {
    var didPressPlayButton: (() -> Void)?
    var didPressShuffleButton: (() -> Void)?

    var body: some View {
        HStack {
            Button(action: {
                didPressPlayButton?()
            }, label: {
                HStack {
                    Image(systemName: "play.fill")
                    Text("PLAY")
                        .modifier(Title2())
                }.modifier(TrackListButtonStyle())
            })
            Button(action: {
                didPressShuffleButton?()
            }, label: {
                HStack {
                    Image(systemName: "shuffle")
                    Text("SHUFFLE")
                        .modifier(Title2())
                }.modifier(TrackListButtonStyle())
            })
        }
    }
}

struct TrackListButtonView_Previews: PreviewProvider {
    static var previews: some View {
        TrackListButtonView()
            .preferredColorScheme(.dark)
    }
}
