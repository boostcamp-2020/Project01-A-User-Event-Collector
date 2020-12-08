//
//  PlayerInfoView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/07.
//

import SwiftUI

struct PlayerInfoView: View {
    
    @Binding var timeDuration: Float
    
    let track: Track
    
    var body: some View {
        VStack(spacing: 40) {
            URLImage(urlString: track.album?.cover)
                .padding()
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

struct PlayerInfoView_Previews: PreviewProvider {
    static var previews: some View {
        PlayerInfoView(timeDuration: .constant(0), track: TestData.defaultTrack)
    }
}
