//
//  SwappableImageLoaderAndCache.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/11.
//
//https://www.lukecsmith.co.uk/2020/11/20/loading-from-url-and-caching-images-in-swiftui/ 참고

import Foundation

class SwappableImageLoaderAndCache: ObservableObject {
    
    @Published var imageData = Data()
    
    init(imageURL: String?, data: Data?) {
        if let data = data {
            imageData = data
        }
        guard let imageURL = imageURL else { return }
        let cache = URLCache.shared
        let request = URLRequest(url: URL(string: imageURL)!,
                                 cachePolicy: URLRequest.CachePolicy.returnCacheDataElseLoad,
                                 timeoutInterval: 60.0)
        if let data = cache.cachedResponse(for: request)?.data {
            print("got image from cache")
            imageData = data
        } else {
            URLSession.shared.dataTask(with: request, completionHandler: { (data, response, _) in
                if let data = data, let response = response {
                    let cachedData = CachedURLResponse(response: response, data: data)
                    cache.storeCachedResponse(cachedData, for: request)
                    DispatchQueue.main.async { [weak self] in
                        print("downloaded from internet")
                        self?.imageData = data
                    }
                }
            }).resume()
        }
    }
}
