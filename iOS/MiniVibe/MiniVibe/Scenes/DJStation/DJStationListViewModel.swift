//
//  DJStationListViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/26.
//
import Combine

class DJStationListViewModel: ObservableObject {
    @Published var stations = [DJStation]()
    
    func fetchStations() {
        stations = [.init(id: 1, imageName: "dj1"),
                    .init(id: 2, imageName: "dj2"),
                    .init(id: 3, imageName: "dj3"),
                    .init(id: 4, imageName: "dj4"),
                    .init(id: 5, imageName: "dj5"),
                    .init(id: 6, imageName: "dj6"),
                    .init(id: 7, imageName: "dj7"),
                    .init(id: 8, imageName: "dj8"),
        ]
    }
}
