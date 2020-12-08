//
//  TrackCellViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/08.
//

import Foundation

class TrackCellViewModel: ObservableObject {
    @Published var track: Track?
    
    func update(with track: Track) {
        self.track = track
    }
    
}
