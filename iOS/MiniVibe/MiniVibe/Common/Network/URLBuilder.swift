//
//  URLBuilder.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/01.
//

import Foundation

struct URLBuilder {
    
    private let baseURL = "http://118.67.135.69:4000/"
    private let pathType: PathType
    private let endPoint: MiniVibeType
    private let id: Int?
    private let filterQuery: String?
    private let limitQuery: String?
    
    init(pathType: PathType,
         endPoint: MiniVibeType,
         id: Int? = nil,
         filterQuery: String? = nil,
         limitQuery: String? = nil) {
        
        self.pathType = pathType
        self.endPoint = endPoint
        self.id = id
        self.filterQuery = filterQuery
        self.limitQuery = limitQuery
        
    }
    
    enum PathType: String {
        case user, api
    }
    
    func create() -> URL? {
        let path = pathType.rawValue
        guard let path2 = endPoint.networkPath() else { return nil }
        let endPoint = "/" + path2
        var urlString = baseURL + path + endPoint
        var queryItems = [URLQueryItem]()
        
        if let idString = id?.description {
            urlString += "/\(idString)"
        }
        
        var urlComponents = URLComponents(string: urlString)
        
        if let filterValue = filterQuery {
            let queryItem = URLQueryItem(name: "filter", value: filterValue)
            queryItems.append(queryItem)
        }
        if let limitValue = limitQuery {
            let queryItem = URLQueryItem(name: "limit", value: limitValue)
            queryItems.append(queryItem)
        }
        
        if queryItems.isEmpty == false {
            urlComponents?.queryItems = queryItems
        }
        return urlComponents?.url
    }
}
