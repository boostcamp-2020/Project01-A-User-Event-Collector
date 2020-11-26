//
//  PlaylistCellView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/23.
//

import SwiftUI

struct PlaylistCellView: View {
    @Binding var playlist: Playlist
    
    var body: some View {
        HStack(spacing: 20) {
            Image(systemName: "person.fill")
                .resizable()
                .frame(width: 90, height: 90)
            VStack(alignment: .leading, spacing: 5) {
                Text(playlist.title)
                    .modifier(Title())
                if let description = playlist.description {
                    Text(description)
                        .modifier(Description())
                        .padding(.bottom, 2)
                }
                if let date = playlist.createdAt {
                    Text(date)
                        .modifier(Description())
                }
                if let author = playlist.author {
                    Text(author)
                        .modifier(Description())
                }
            }
        }.padding([.top, .leading, .trailing])
    }
}

//struct PlayListCellView_Previews: PreviewProvider {
//    static var previews: some View {
//        @State var playList = Playlist(id: 1, title: "나만 없어 그 한정판 LP 레코드", imageUrl: "hi", description: "플로피 디스크 모양의 저장 버튼처럼 상식적 존재가 될 것 같았던 LP 레코드가 다시 규모로는 작아도 열기로는 큰 존재가 되고 있다.", createdAt: "2020-10-11", author: nil)
//        PlaylistCellView(playlist: playList)
//            .preferredColorScheme(.dark)
//    }
//}
