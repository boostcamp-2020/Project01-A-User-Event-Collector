//
//  MongoDBEventEngine.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/10.
//

import Foundation
import Combine
import DiveEventCollector

class MongoDBEventEngine: EventSendable {
    
    private let networkManager = NetworkManager()
    private var cancellables = Set<AnyCancellable>()
    
    func send<T: Event>(_ event: T) {
        post(event)
    }
    
    func post<T: Event>(_ event: T) {
        let url = URLBuilder(pathType: .api,
                             endPoint: .log).create()
        let jsonBody = try? JSONEncoder().encode(event)
        let urlrequest = RequestBuilder(url: url,
                                           method: .post,
                                           body: jsonBody).create()
        
        networkManager.request(urlRequest: urlrequest) { _ in }
    }
    
    deinit {
        cancellables.forEach { $0.cancel() }
    }
    
}
