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

struct RequestBuilder<T: Encodable> {
    // TODO: - 각 뷰에 맞춰서 urlString을 endpoint에 맞게 생성해주는 객체 생성 필요
    let url: URL?
    let method: NetworkMethod = .get
    let body: T?
    let headers: [String: String]?
    
    func create() -> URLRequest? {
        guard let url = url else { return nil }
        var request = URLRequest(url: url)
        request.httpMethod = method.rawValue.uppercased()
        if let body = body,
           let data = try? JSONEncoder().encode(body) {
            request.httpBody = data
        }
        if let headers = headers {
            request.allHTTPHeaderFields = headers
        }
        return request
    }
}
