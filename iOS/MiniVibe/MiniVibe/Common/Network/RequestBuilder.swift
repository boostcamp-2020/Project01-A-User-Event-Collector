//
//  RequestBuilder.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/01.
//

import Foundation

enum NetworkMethod: String {
    case get
    case post
    case put
    case patch
    case delete
}

struct RequestBuilder {
    let url: URL?
    let method: NetworkMethod
    let body: Data?
    let headers: [String: String]?
    
    func create() -> URLRequest? {
        guard let url = url else { return nil }
        var request = URLRequest(url: url)
        request.httpMethod = method.rawValue.uppercased()
        if let body = body {
            request.httpBody = body
        }
        if let headers = headers {
            request.allHTTPHeaderFields = headers
        }
        return request
    }
}
