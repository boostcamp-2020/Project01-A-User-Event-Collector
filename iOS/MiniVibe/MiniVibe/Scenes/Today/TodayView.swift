//
//  TodayView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import SwiftUI

struct TodayView: View {
    private let router = TodayRouter()
    @StateObject private var viewModel = TodayViewModel()
    
    var body: some View {
        NavigationView {
            List {
                //                NavigationLink(
                //                    destination: router.getDestination(to: .favorites),
                //                    label: {
                //                        CategoryView(category: category)
                //                    }
                //                )
                let favoritesCategory = Category(playlists: viewModel.favorites,
                                                 type: .favorites,
                                                 mode: .half)
                MemorySafeNavigationLink(
                    contentView: CategoryView(category: favoritesCategory),
                    destination: router.getDestination(to: .favorites)
                )
                
                let magazinesCategory = Category(magazines: viewModel.magazines,
                                                 mode: .full)
                MemorySafeNavigationLink(
                    contentView: CategoryView(category: magazinesCategory),
                    destination: router.getDestination(to: .magazines)
                )
                
                let recommendationsCategory = Category(playlists: viewModel.recommends,
                                                       type: .recommendations,
                                                       mode: .full)
                MemorySafeNavigationLink(
                    contentView: CategoryView(category: recommendationsCategory),
                    destination: router.getDestination(to: .recommendations)
                )
                
                //                NavigationLink(
                //                    destination: router.getDestination(to: .tracks),
                //                    label: {
                //
                //                        TrackHorizontalListView(tracks: viewModel.tracks)
                //                            .padding([.leading, .trailing])
                //                    })
                //                .listRowInsets(EdgeInsets())
                
                Rectangle()
                    .clearBottom()
            }
            .listStyle(PlainListStyle())
            .navigationTitle("VIBE")
        }
        .preferredColorScheme(.dark)
        .navigationViewStyle(StackNavigationViewStyle())
        .onAppear(perform: {
            viewModel.fetchAll()
        })
    }
}

struct TodayView_Previews: PreviewProvider {
    static var previews: some View {
        TodayView()
    }
}
