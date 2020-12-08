//
//  DJStationListViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/26.
//
import Foundation
import Combine

class DJStationListViewModel: MiniVibeViewModel, ObservableObject {
    @Published var stations = [DJStation]()
    
    func fetchStations() {
        internalFetch(endPoint: .djStations) { [weak self] data in
            if let decodedData = try? JSONDecoder().decode(DJStationResponse.self, from: data) {
                DispatchQueue.main.async {
                    self?.stations = decodedData.djStations
                }
            }
        }
    }
}
