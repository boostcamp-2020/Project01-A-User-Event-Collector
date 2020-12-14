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
    var imageCache = ImageCache.shared
    
    private let network = NetworkService(session: URLSession.shared)
    private var cancellables = Set<AnyCancellable>()
    
    func fetch(urlString: String?, imageData: Data?) {
        if image != nil {
            return
        }
        if let imageData = imageData {
            image = UIImage(data: imageData)
            return
        }
        guard let urlString = urlString else {
            image = UIImage(named: "appIcon")
            return
        }
        if loadFromCache(urlString: urlString) {
            return
        }
        loadFromUrl(urlString: urlString)
    }
    
    func loadFromUrl(urlString: String) {
        let url = URL(string: urlString)
        let urlRequest = RequestBuilder(url: url, method: .get,
                                        body: nil,
                                        headers: nil).create()
        guard let request = urlRequest else { return }
        
        network.request(request: request)
            .sink { result in
                switch result {
                case .failure(let error):
                    print(error)
                case .finished:
                    //                    print("success")
                    break
                }
            } receiveValue: { [weak self] data in
                DispatchQueue.main.async { [weak self] in
                    self?.image = UIImage(data: data)
                    self?.imageCache.set(forKey: urlString, data: data as NSData)
                }
            }
            .store(in: &cancellables)
    }
    
    func loadFromCache(urlString: String) -> Bool {
        guard let data = imageCache.get(forKey: urlString) else {
            return false
        }
        
        DispatchQueue.main.async { [weak self] in
            self?.image = UIImage(data: data as Data)
        }
        return true
    }
    
    deinit {
        cancellables.forEach { $0.cancel() }
    }
}
