//
//  NetworkManager.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/02.
//

import Foundation
import Combine

class NetworkManager {
    
    private let network = NetworkService(session: URLSession.shared)
    private var cancellables = Set<AnyCancellable>()
    
    func request(urlRequest: URLRequest?,
                 completion: @escaping (Data) -> Void) {
        guard let urlRequest = urlRequest else { return }
        
        network.request(request: urlRequest)
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
