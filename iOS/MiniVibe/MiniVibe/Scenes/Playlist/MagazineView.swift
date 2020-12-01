//
//  MagazineView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

struct MagazineView: View {
//    @Binding var playlist: Playlist
    let magazine: Magazine
    private let trackListId: Int = 1
    private let layout = [GridItem(.flexible())]
    
    var body: some View {
        ScrollView(showsIndicators: false) {
            LazyVGrid(columns: layout,
                      spacing: 20,
                      pinnedViews: [.sectionHeaders]) {
                Image(magazine.cover ?? "logo")
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                Section(header: TrackListButtonView()) {
                    if let description = magazine.description {
                        Text(description)
                            .modifier(Description1NoLimit())
                    }
                    TrackListView(tracks: magazine.tracks!)
                }
            }
        }.padding()
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .principal) {
                VStack {
                    Text(magazine.name)
                        .modifier(Title2())
                }
            }
        }
    }
}

struct MagazineView_Previews: PreviewProvider {
    static var previews: some View {
        MagazineView(magazine: TestData.magazine)
    }
}
