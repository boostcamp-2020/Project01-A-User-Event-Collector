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
        stations = [.init(id: 1, imageName: "shield.fill"),
                    .init(id: 2, imageName: "hexagon.fill"),
                    .init(id: 3, imageName: "triangle.fill"),
                    .init(id: 4, imageName: "circle.fill"),
                    .init(id: 5, imageName: "circle.fill"),
                    .init(id: 6, imageName: "heart.fill"),
        ]
    }
}
