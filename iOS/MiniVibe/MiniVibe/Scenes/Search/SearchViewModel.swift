//
//  SearchViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/05.
//
import Foundation
import Combine

class SearchViewModel: ObservableObject {
    @Published var searchText = ""
    @Published var isEditing = false
    @Published var tracks = [Track]()
    @Published var albums = [Album]()
    @Published var artists = [Artist]()
    
    var subscription: Set<AnyCancellable> = []
    private let manager: AnalyticsManager
    private let networkManager = NetworkManager()
    
    init(manager: AnalyticsManager) {
        self.manager = manager
        searchSubscription()
        searchEventSubscription()
    }
    
    func fetch(_ searchText: String) {
        if isEditing {
            let url = URLBuilder(pathType: .api,
                                 endPoint: .search,
                                 filterQuery: searchText).create()
            let urlRequest = RequestBuilder(url: url,
                                            method: .get).create()
            networkManager.request(urlRequest: urlRequest) { [weak self] data in
                if let decodedData = try? JSONDecoder().decode(Search.self, from: data) {
                    DispatchQueue.main.async {
                        self?.tracks = decodedData.tracks ?? []
                        self?.albums = decodedData.albums ?? []
                        self?.artists = decodedData.artists ?? []
                    }
                }
            }
        }
    }
    
    func reset() {
        isEditing = false
        searchText = ""
        tracks.removeAll()
        albums.removeAll()
        artists.removeAll()
    }
    
    func searchSubscription() {
        $searchText
            .debounce(for: .milliseconds(500), scheduler: RunLoop.main)
            .removeDuplicates()
            .map({ (string) -> String? in
                self.validate(string)
            })
            .compactMap { $0 }
            .sink { (_) in
                
            } receiveValue: { [weak self] searchText in
                self?.fetch(searchText)
            }
            .store(in: &subscription)

    }
    
    func validate(_ string: String) -> String? {
        if string.isEmpty {
            if self.isEditing {
                 self.reset()
            }
            return nil
        }
        self.isEditing = true
        return string
    }
    
    func searchEventSubscription() {
        $isEditing
            .sink { [weak self] isEditing in
                if isEditing {
                    self?.manager.log(ScreenEvent.screenViewed(.searchAfter))
                } else {
                    self?.manager.log(ScreenEvent.screenViewed(.searchBefore))
                }
            }
            .store(in: &subscription)
    }
}
