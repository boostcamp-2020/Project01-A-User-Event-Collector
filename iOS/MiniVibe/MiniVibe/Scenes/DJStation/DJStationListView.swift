//
//  DJStationListView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/26.
//

import SwiftUI
import DiveEventCollector

struct DJStationListView: View {
    
    @StateObject var stationViewModel = DJStationListViewModel()
    private let manager: EventManager
    
    init(manager: EventManager) {
        self.manager = manager
    }
    
    let columns = [
        GridItem(.flexible(minimum: 50, maximum: .infinity)),
        GridItem(.flexible(minimum: 50, maximum: .infinity))
    ]
    
    var body: some View {
        ScrollView(.vertical, showsIndicators: false) {
            LazyVGrid(columns: columns) { [ weak stationViewModel = self.stationViewModel] in
                if let stationViewModel = stationViewModel {
                    ForEach(stationViewModel.stations) { station in
                        Button(action: {
                            manager.log(ButtonEvent.djStationTouched)
                        }, label: {
                            URLImage(urlString: station.cover)
                                .frame(minHeight: 100)
                        })
                        .padding(.all, 15)
                        .accentColor(.green)
                    }
                }
            }
        }
        .modifier(NavigationBarStyle(title: "DJ 스테이션"))
        .onAppear { [weak stationViewModel = self.stationViewModel] in
            stationViewModel?.fetch()
        }
    }
}
