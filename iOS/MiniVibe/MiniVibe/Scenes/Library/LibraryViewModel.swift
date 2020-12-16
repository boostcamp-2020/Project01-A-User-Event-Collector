//
//  LibraryViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/08.
//

import Foundation
import Combine
import DiveEventCollector

class LibraryViewModel: ObservableObject {
    @Published var tracks = [Track]()
    
    private let manager: EventManager
    private let coreDataManager = CoreTrackAPI()
    
    init(manager: EventManager) {
        self.manager = manager
    }
    
    func fetch() {
        var tracks = [Track]()
        let predicate = NSPredicate(format: "isSavedToLibrary Contains %d", true)
        let coreTracks = coreDataManager.fetch(predicate: predicate)
        coreTracks.forEach { coreTrack in
            tracks.append(Track(from: coreTrack))
        }
        self.tracks = tracks
    }
    
}
