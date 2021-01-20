//
//  ImageLoader.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/04.
//

import SwiftUI
import Combine

class URLImageLoader: ObservableObject {
    @Published var image: UIImage?
    
    private var imageCache = ImageCache.shared
    private let network = NetworkService(session: URLSession.shared)
    private var cancellable: AnyCancellable?
    private var id: UUID?
    
    func fetch(urlString: String?, imageData: Data?) {
        guard let urlString = urlString else { return }
        if image != nil {
            return
        }
        if let imageData = imageData {
            image = UIImage(data: imageData)
            return
        }
//        guard let urlString = urlString else {
//            image = UIImage(named: "appIcon")
//            return
//        }
        if loadFromCache(urlString: urlString) {
            return
        }
        loadFromUrl(urlString: urlString)
    }
    
    func cancel() {
        cancellable?.cancel()
    }
    
    private func loadFromUrl(urlString: String) {
        let url = URL(string: urlString)
        let urlRequest = RequestBuilder(url: url, method: .get).create()
        guard let request = urlRequest else { return }
        
        cancellable = network.request(request: request)
            .sink { result in
                switch result {
                case .failure(let error):
                    print(error)
                case .finished:
                    break
                }
            } receiveValue: { [weak self] data in
                guard let self = self,
                      let image = UIImage(data: data) else { return }
                DispatchQueue.main.async { [weak self] in
                    self?.image = image
                }
                self.imageCache.set(forKey: urlString, data: data as NSData)
                self.imageCache.imageCache.set(forKey: urlString, data: image)
            }
    }
    
    private func loadFromCache(urlString: String) -> Bool {
        guard let image = imageCache.imageCache.get(forKey: urlString) else {
            return false
        }
        
        self.image = image
        return true
    }
    
    deinit {
        cancel()
    }
}
