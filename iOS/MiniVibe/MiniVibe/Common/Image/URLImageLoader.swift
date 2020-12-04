//
//  ImageLoader.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/04.
//

import SwiftUI
import Combine

class URLImageLoader: ObservableObject {
    @Published var image = UIImage(named: "logo")
    
    private let network = NetworkService(session: URLSession.shared)
    private var cancellables = Set<AnyCancellable>()
    
    func fetch(urlString: String?) {
        guard let urlString = urlString else { return }
        let url = URL(string: urlString)
        let urlRequest = RequestBuilder(url: url,
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
                DispatchQueue.main.async {
                    self?.image = UIImage(data: data)
                }
            }
            .store(in: &cancellables)
    }
    
    deinit {
        cancellables.forEach { $0.cancel() }
    }
}
