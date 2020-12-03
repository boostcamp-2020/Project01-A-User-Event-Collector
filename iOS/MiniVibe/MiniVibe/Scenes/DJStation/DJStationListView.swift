//
//  DJStationListView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/26.
//

import SwiftUI

struct DJStationListView: View {
    
    @StateObject var stationViewModel = DJStationListViewModel()
    
    let columns = [
        GridItem(.flexible(minimum: 50, maximum: .infinity)),
        GridItem(.flexible(minimum: 50, maximum: .infinity))
    ]
    
    var body: some View {
        ScrollView(.vertical, showsIndicators: false) {
            LazyVGrid(columns: columns) {
                ForEach(stationViewModel.stations) { station in
                    Button(action: {
                    }, label: {
                        Image(station.imageName)
                            .resizable()
                            .aspectRatio(contentMode: .fill)
                    })
                    .padding(.all, 15)
                    .accentColor(.green)
                }
            }
        }
        .modifier(NavigationBarStyle(title: "DJ 스테이션"))
        .onAppear(perform: stationViewModel.fetchStations)
    }
}

struct DJStationListView_Previews: PreviewProvider {
    static var previews: some View {
        DJStationListView()
    }
}
