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
        guard let magazine = viewModel.magazine,
              let tracks = magazine.tracks else { return AnyView(EmptyView().onAppear(perform: {
                viewModel.fetch(id: magazineID)
            }))
             
        }
        
        return AnyView(
            ScrollView(showsIndicators: false) {
                LazyVGrid(columns: layout,
                          spacing: 20,
                          pinnedViews: [.sectionHeaders]) {
                    URLImage(urlString: magazine.cover)
                    TrackListView(tracks: tracks)
                }
            }
            .padding()
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .principal) {
                    VStack {
                        Text(magazine.name)
                            .modifier(Title2())
                    }
                }
            }
        )
    }
}

struct MagazineView_Previews: PreviewProvider {
    static var previews: some View {
        MagazineView(magazineID: 1)
            .preferredColorScheme(.dark)
    }
}
