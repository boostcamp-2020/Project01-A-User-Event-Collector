//
//  LibraryViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/08.
//

import Foundation
import Combine

class LibraryViewModel: ObservableObject {
    @Published var tracks = [Track]()
    
    private let manager: AnalyticsManager
    private let coreDataManager = CoreTrackAPI()
    
    init(manager: AnalyticsManager) {
        self.manager = manager
    }
    
    func fetch() {
        var tracks = [Track]()
        let predicate = NSPredicate(format: "isFavorite Contains %d", true)
        let coreTracks = coreDataManager.fetch(predicate: predicate)
        coreTracks.forEach { coreTrack in
            tracks.append(Track(from: coreTrack))
        }
        self.tracks = tracks
    }
    
}
