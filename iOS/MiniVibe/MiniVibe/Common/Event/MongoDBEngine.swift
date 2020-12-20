//
//  MongoDBEngine.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/10.
//

import Foundation
import Combine

class MongoDBEngine: AnalyticsPostEngine {
    
    private let networkManager = NetworkManager()
    private var cancellables = Set<AnyCancellable>()
    
    func send<T: AnalyticsEvent>(_ event: T) {
        post(event)
    }
    
    func post<T: AnalyticsEvent>(_ event: T) {
        let url = URLBuilder(pathType: .api,
                             endPoint: .log).create()
        let jsonBody = try? JSONEncoder().encode(event)
        let urlrequest = RequestBuilder(url: url,
                                           method: .post,
                                           body: jsonBody).create()
        
        networkManager.request(urlRequest: urlrequest) { data in
            if let prettifyJSONString = data.prettifyJSONString {
                print(prettifyJSONString)
            }
        }
    }
    
    deinit {
        cancellables.forEach { $0.cancel() }
    }
    
}
