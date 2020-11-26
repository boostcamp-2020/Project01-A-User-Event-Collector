//
//  DJStationListView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/26.
//

import SwiftUI

struct DJStationListView: View {
    
    @StateObject var stationViewModel = DJStationListViewModel()
    
    let columns = [GridItem(.flexible(minimum: 50, maximum: .infinity)), GridItem(.flexible(minimum: 50, maximum: .infinity))]
    
    var body: some View {
        ScrollView(.vertical) {
            LazyVGrid(columns: columns) {
                ForEach(stationViewModel.stations) { station in
                    Button(action: {
                    }, label: {
                        Image(systemName: station.imageName)
                            .resizable()
                            .aspectRatio(contentMode: .fit)
                            .frame(minHeight: 100)
                    })
                    .padding(.all, 30)
                    .accentColor(.green)
                }
            }
        }
        .onAppear(perform: stationViewModel.fetchStations)
    }
}

struct DJStationListView_Previews: PreviewProvider {
    static var previews: some View {
        DJStationListView()
    }
}
