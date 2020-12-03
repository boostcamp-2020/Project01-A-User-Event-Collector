//
//  MagazineView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import SwiftUI

struct MagazineView: View {
    @StateObject private var viewModel = MagazineViewModel()
    
    private let magazineID: Int
    private let layout = [GridItem(.flexible())]
    
    init(magazineID: Int) {
        self.magazineID = magazineID
    }
    
    var body: some View {
        Group {
            if let magazine = viewModel.magazine,
               let tracks = magazine.tracks {
                ScrollView(showsIndicators: false) {
                    LazyVGrid(columns: layout,
                              spacing: 20,
                              pinnedViews: [.sectionHeaders]) {
                        Image(systemName: "person.fill")
                        //                    AsyncImage(url: URL(string: magazine.cover ?? ""))
                        Section(header: TrackListButtonView()) {
                            if let description = magazine.description {
                                Text(description)
                                    .modifier(Description1NoLimit())
                            }
                            TrackListView(tracks: tracks)
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
            } else {
                EmptyView().onAppear(perform: {
                    viewModel.fetch(id: magazineID)
                })
            }
        }
    }
}

struct MagazineView_Previews: PreviewProvider {
    static var previews: some View {
        MagazineView(magazineID: 1)
            .preferredColorScheme(.dark)
    }
}
