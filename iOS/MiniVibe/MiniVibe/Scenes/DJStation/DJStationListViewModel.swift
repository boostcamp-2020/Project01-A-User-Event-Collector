//
//  DJStationListViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/26.
//
import Foundation
import Combine

class DJStationListViewModel: ObservableObject {
    @Published var stations = [DJStation]()
    
    private let networkManager = NetworkManager()
    
    func fetch() {
        let url = URLBuilder(pathType: .api,
                             endPoint: .djStations).create()
        let urlRequest = RequestBuilder(url: url,
                                        method: .get).create()
        networkManager.request(urlRequest: urlRequest) { [weak self] data in
            if let decodedData = try? JSONDecoder().decode(DJStationResponse.self, from: data) {
                DispatchQueue.main.async { [weak self] in
                    self?.stations = decodedData.djStations
                }
            }
        }
    }
}
