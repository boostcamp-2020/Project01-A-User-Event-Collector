//
//  TrackPageview.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/30.
//

import SwiftUI

struct TrackPageView: View {
    private let id: Int
    @StateObject private var viewModel = TrackListViewModel()
    
    init(id: Int) {
        self.id = id
    }
    
    var body: some View {
        ScrollView(.horizontal) {
            HStack {
                ForEach(viewModel.getTracksOfFive()){ group in
                    TrackGroupView(trackGroup: group)
                        .padding()
                        .frame(width: UIScreen.main.bounds.width)
                }
            }
    //        .modifier(NavigationBarStyle(title: ""))
            .onAppear(perform: {
                viewModel.fetchTracks(id: id)
        })
        }
    }
}

struct TrackPageview_Previews: PreviewProvider {
    static var previews: some View {
        TrackPageView(id: 1)
    }
}
