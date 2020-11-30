//
//  NetworkService.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/30.
//

import Foundation
import Combine

final class NetworkService {
    
    enum NetworkError: Error {
        case invalidRequest
        case unknownError(message: String)
    }
    
    private let session: URLSession
    
    init(session: URLSession) {
        self.session = session
    }
    
    func request(request: URLRequest) -> AnyPublisher<Data, NetworkError> {
        return session.dataTaskPublisher(for: request)
            .tryMap { data, response -> Data in
                guard let httpResponse = response as? HTTPURLResponse,
                      (200...299).contains(httpResponse.statusCode) else {
                    throw NetworkError.invalidRequest
                }
                return data
            }
            .mapError { error -> NetworkError in
                .unknownError(message: error.localizedDescription)
            }
            .eraseToAnyPublisher()
    }
}

struct RequestBuilder<T: Encodable> {
    // TODO: - 각 뷰에 맞춰서 urlString을 endpoint에 맞게 생성해주는 객체 생성 필요
    let urlString: String
    let method: NetworkMethod = .get
    let body: T?
    let headers: [String: String]?
    
    func create() -> URLRequest? {
        guard let url = URL(string: urlString) else { return nil }
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

enum NetworkMethod: String {
    case get
    case post
    case put
    case patch
    case delete
}

struct Welcome: Codable {
    let userId: Int
    let id: Int
    let title: String
    let completed: Bool
}
