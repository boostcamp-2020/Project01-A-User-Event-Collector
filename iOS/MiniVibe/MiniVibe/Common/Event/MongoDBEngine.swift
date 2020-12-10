//
//  MongoDBEngine.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/10.
//

import Foundation
import Combine

class MongoDBEngine: AnalyticsEngine {
    
    private let network = NetworkService(session: URLSession.shared)
    private var cancellables = Set<AnyCancellable>()
    
    func sendAnalyticsEvent<T: AnalyticsEvent>(_ event: T) {
        post(event)
    }
    
    func post<T: AnalyticsEvent>(_ event: T) {
        let url = URLBuilder(pathType: .api,
                             endPoint: .log,
                             id: nil,
                             filterQuery: nil,
                             limitQuery: nil).create()
        
        let jsonBody = try? JSONEncoder().encode(event)
        
        guard let request = RequestBuilder(url: url,
                                           method: .post,
                                           body: jsonBody,
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
                print(data)
            }
            .store(in: &cancellables)
    }
    
    deinit {
        cancellables.forEach { $0.cancel() }
    }
    
}
