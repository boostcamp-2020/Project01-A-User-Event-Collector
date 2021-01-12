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
    private let network = NetworkManager()
    private var cancellables = Set<AnyCancellable>()
    private let urlStrings = [
        "https://cdn.pixabay.com/photo/2020/12/20/10/01/advent-5846564__480.jpg",
        "https://cdn.pixabay.com/photo/2020/12/20/19/21/cookies-5847940__480.jpg",
        "https://cdn.pixabay.com/photo/2019/12/17/14/07/amaryllis-4701720__480.jpg",
        "https://cdn.pixabay.com/photo/2019/12/06/19/06/heart-4678021__480.jpg",
        "https://cdn.pixabay.com/photo/2020/12/20/04/06/bear-5846065__480.jpg",
        "https://cdn.pixabay.com/photo/2019/12/20/07/05/architecture-4707761__480.jpg"
    ]
    
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
    
    private func loadFromUrl(urlString: String) {
        guard let urlString = urlStrings.randomElement() else { return }
        let url = URL(string: urlString)
        let urlRequest = RequestBuilder(url: url, method: .get).create()
        guard let request = urlRequest else { return }
        
        network.request(urlRequest: request) { data in
            DispatchQueue.main.async { [weak self] in
                self?.image = UIImage(data: data)
                self?.imageCache.set(forKey: urlString, data: data as NSData)
            }
        }
    }
    
    private func loadFromCache(urlString: String) -> Bool {
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
