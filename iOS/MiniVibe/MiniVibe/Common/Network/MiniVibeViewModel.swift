//
//  MiniVibeViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/02.
//

import Foundation
import Combine

class MiniVibeViewModel<T: Decodable>: ObservableObject {
    var data: T?
    
    private let network = NetworkService(session: URLSession.shared)
    private var cancellabes = Set<AnyCancellable>()
    
    func fetch(endPoint: MiniVibeType, id: Int? = nil, filterQuery: String? = nil, limitQuery: String? = nil) {
        let url = URLBuilder(pathType: .api, endPoint: endPoint, id: id, filterQuery: nil, limitQuery: nil).create()
        
        guard let request = RequestBuilder(url: url,
                                           body: nil,
                                           headers: nil).create() else { return }
        network.request(request: request)
            .sink { result in
                switch result {
                case .failure(let error):
                    print(error)
                case .finished:
                    print("success")
                }
            } receiveValue: { data in
                if let decodedData = try? JSONDecoder().decode(T.self, from: data) {
                    DispatchQueue.main.async {
                        self.data = decodedData
                    }
                }
            }
            .store(in: &cancellabes)
    }
}

