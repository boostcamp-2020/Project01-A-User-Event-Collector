//
//  SearchViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/05.
//
import Foundation
import Combine
import UIKit
import DiveEventCollector

class SearchViewModel: ObservableObject {
    @Published var searchText = ""
    @Published var isEditing = false
    @Published var tracks = [Track]()
    @Published var albums = [Album]()
    @Published var artists = [Artist]()
    
    private var cancellables: Set<AnyCancellable> = []
    private let manager: EventManager
    private let networkManager = NetworkManager()
    
    init(manager: EventManager) {
        self.manager = manager
        addSubscriptions()
    }
    
    deinit {
        cancellables.forEach { $0.cancel() }
    }
    
    func reset() {
        isEditing = false
        searchText = ""
        tracks.removeAll()
        albums.removeAll()
        artists.removeAll()
    }
    
    private func fetch(_ searchText: String) {
        if isEditing {
            let url = URLBuilder(pathType: .api,
                                 endPoint: .search,
                                 filterQuery: searchText).create()
            let urlRequest = RequestBuilder(url: url,
                                            method: .get).create()
            networkManager.request(urlRequest: urlRequest) { [weak self] data in
                if let decodedData = try? JSONDecoder().decode(Search.self, from: data) {
                    DispatchQueue.main.async { [weak self] in
                        self?.tracks = decodedData.tracks ?? []
                        self?.albums = decodedData.albums ?? []
                        self?.artists = decodedData.artists ?? []
                    }
                }
            }
        }
    }
    
    private func addSubscriptions() {
        searchSubscription()
        searchEventSubscription()
    }
    
    private func searchSubscription() {
        $searchText
            .debounce(for: .milliseconds(500), scheduler: RunLoop.main)
            .removeDuplicates()
            .map({[weak self] (string) -> String? in
                self?.validate(string)
            })
            .compactMap { $0 }
            .sink { (_) in
                
            } receiveValue: { [weak self] searchText in
                self?.fetch(searchText)
            }
            .store(in: &cancellables)
    }
    
    private func searchEventSubscription() {
        $isEditing
            .sink { [weak self] isEditing in
                if isEditing {
                    self?.manager.log(ScreenEvent.screenViewed(.searchAfter))
                } else {
                    self?.manager.log(ScreenEvent.screenViewed(.searchBefore))
                }
            }
            .store(in: &cancellables)
    }

    private func validate(_ string: String) -> String? {
        if string.isEmpty { 
            return nil
        }
        return string
    }
    
}
