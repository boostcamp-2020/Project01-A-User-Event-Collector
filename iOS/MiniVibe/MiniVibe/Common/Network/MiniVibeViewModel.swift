//
//  MiniVibeViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/02.
//

import Foundation
import Combine

class MiniVibeViewModel {
    
    private let network = NetworkService(session: URLSession.shared)
    private var cancellabes = Set<AnyCancellable>()
    
    func internalFetch(endPoint: MiniVibeType, id: Int? = nil, filterQuery: String? = nil, limitQuery: String? = nil,  completion: @escaping (Data) -> Void) {
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
                completion(data)
            }
            .store(in: &cancellabes)
    }
}

