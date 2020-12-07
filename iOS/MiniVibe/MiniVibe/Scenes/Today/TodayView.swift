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
                NavigationLink(
                    destination: router.getDestination(to: .favorites),
                    label: {
                        CategoryView(category: Category(playlists: viewModel.favorites, type: .favorites, mode: .half))
                    })
                .listRowInsets(EdgeInsets())
                NavigationLink(
                    destination: router.getDestination(to: .magazines),
                    label: {
                        CategoryView(category: Category(magazines: viewModel.magazines, mode: .full))
                    })
                .listRowInsets(EdgeInsets())

                NavigationLink(
                    destination: router.getDestination(to: .recommendations),
                    label: {
                        CategoryView(category: Category(playlists: viewModel.recommends,
                                                        type: .recommendations,
                                                        mode: .full))
                    })
                .listRowInsets(EdgeInsets())
                
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
            }.listStyle(PlainListStyle())
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
