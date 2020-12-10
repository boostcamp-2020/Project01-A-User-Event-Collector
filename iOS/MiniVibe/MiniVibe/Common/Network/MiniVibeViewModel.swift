//
//  MiniVibeViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/02.
//

import SwiftUI
import Combine

class MiniVibeViewModel {
    
    @Published var image = UIImage(named: "logo")
    
    private let network = NetworkService(session: URLSession.shared)
    private var cancellables = Set<AnyCancellable>()
    
    func internalFetch(endPoint: MiniVibeType,
                       id: Int? = nil,
                       filterQuery: String? = nil,
                       limitQuery: String? = nil,
                       completion: @escaping (Data) -> Void) {
        let url = URLBuilder(pathType: .api,
                             endPoint: endPoint,
                             id: id,
                             filterQuery: filterQuery,
                             limitQuery: limitQuery).create()
        
        guard let request = RequestBuilder(url: url,
                                           method: .get,
                                           body: nil,
                                           headers: nil).create() else { return }
        network.request(request: request)
            .sink { result in
                switch result {
                case .failure(let error):
                    print(error)
                case .finished:
                    break
                }
            } receiveValue: { data in
                completion(data)
            }
            .store(in: &cancellables)
    }
    
    deinit {
        cancellables.forEach { $0.cancel() }
    }
}
