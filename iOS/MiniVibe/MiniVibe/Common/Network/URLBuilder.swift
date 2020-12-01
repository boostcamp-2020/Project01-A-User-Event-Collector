//
//  URLBuilder.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/01.
//

import Foundation

struct URLBuilder {
    
    let baseURL = "http://101.101.209.207:3000/"
    let pathType: PathType
    let endPoint: EndPoint
    let id: Int?
    let filterQuery: String?
    let limitQuery: String?
    
    enum PathType: String {
        case user, api
    }
    
    enum EndPoint: String {
        case magazines, playlists, albums
        case djStation = "dj-station"
    }
    
    func create() -> URL? {
        let path = pathType.rawValue + "/"
        let endPoint = self.endPoint.rawValue + "/"
        var urlString = baseURL + path + endPoint
        var queryItems = [URLQueryItem]()
        
        if let idString = id?.description {
            urlString += "\(idString)"
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
        
        urlComponents?.queryItems = queryItems
        
        return urlComponents?.url
    }
}
