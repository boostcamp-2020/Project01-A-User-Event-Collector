//
//  MagazineViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/02.
//

import Foundation

class MagazineViewModel: ObservableObject {
    @Published var magazine: Magazine?
    
    private let networkManager = NetworkManager()
    
    func fetch(id: Int) {
        let url = URLBuilder(pathType: .api,
                             endPoint: .magazines,
                             id: id).create()
        let urlRequest = RequestBuilder(url: url,
                                        method: .get).create()
        networkManager.request(urlRequest: urlRequest) { [weak self] data in
            guard let self = self else { return }
            if let decodedData = try? JSONDecoder().decode(MagazineReponse.self, from: data) {
                self.magazine = decodedData.magazine
            }
        }
    }
}
