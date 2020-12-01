//
//  SearchAfterCategoriesView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/02.
//

import SwiftUI

struct SearchAfterCategoriesView: View {
    private let tracks: [Track]?
    private let albums: [Album]?
    private let artists: [Artist]?
    
    init(tracks: [Track]?, albums: [Album]?, artists: [Artist]?) {
        self.tracks = tracks
        self.albums = albums
        self.artists = artists
    }
    
    var body: some View {
        ScrollView {
            LazyVGrid(columns: [GridItem(.flexible())],
                      spacing: 40,
                      pinnedViews: [.sectionHeaders]) {
                Section(header: SearchBarView(text: .constant(""))) {
                    if let tracks = tracks {
                        SearchAfterCategoryView(type: .track, tracks: tracks)
                        SearchAfterCategoryView(type: .album, tracks: tracks)
                        SearchAfterCategoryView(type: .artist, tracks: tracks)
                    }
            //        if let albums = albums {
            //            SearchAfterCategoryView(type: .album, tracks: albums)
            //        }
            //        if let artists = artists {
            //            SearchAfterCategoryView(type: .artist, tracks: artists)
            //        }
                }
            }
        }.padding()
    }
}

struct SearchAfterCategoriesView_Previews: PreviewProvider {
    static var previews: some View {
        SearchAfterCategoriesView(tracks: TestData.playlist.tracks, albums: nil, artists: nil)
    }
}
