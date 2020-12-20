//
//  PlayerHeaderView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/07.
//

import SwiftUI

struct PlayerHeaderView: View {
    @Binding var showMediaPlayer: Bool
    
    var body: some View {
        HStack {
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
            .accessibility(identifier: "ClosePlayer")
        }
    }
}
