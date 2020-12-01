//
//  MagazineView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

struct MagazineView: View {
//    @Binding var playlist: Playlist
    let playlist = Playlist(id: 1, title: "잠못드는 밤", imageUrl: "favorite1", description: "전인 얼음이 투명하되 이것이다. 놀이 사는가 대고, 전인 뿐이다. 할지니, 이상은 풍부하게 공자는 보라. 방지하는 인간의 따뜻한 인류의 찾아다녀도, 많이 운다. 생명을 것은 이상의 온갖 장식하는 속잎나고, 인도하겠다는 모래뿐일 위하여서. 방지하는 가는 수 스며들어 부패를 인간은 위하여서. 광야에서 오아이스도 설산에서 얼마나 부패를 있으랴? 인생의 이상은 동산에는 우리의 봄바람이다. 피에 우리 인도하겠다는 것은 유소년에게서 꽃 살 없으면, 말이다. 보이는 못할 새 사막이다.", createdAt: "2020-10-11", author: nil)
    private let trackListId: Int = 1
    private let layout = [GridItem(.flexible())]
    
    var body: some View {
        ScrollView(showsIndicators: false) {
            LazyVGrid(columns: layout,
                      spacing: 20,
                      pinnedViews: [.sectionHeaders]) {
                Image(playlist.imageUrl)
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                Section(header: TrackListButtonView()) {
                    if let description = playlist.description {
                        Text(description)
                            .modifier(Description1NoLimit())
                    }
                    TrackListView(id: trackListId)
                }
            }
        }.padding()
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .principal) {
                VStack {
                    Text(playlist.title)
                        .modifier(Title2())
                    if let author = playlist.author {
                        Text(author)
                            .modifier(Description2())
                    }
                }
            }
        }
    }
}

struct MagazineView_Previews: PreviewProvider {
    static var previews: some View {
        MagazineView()
    }
}
