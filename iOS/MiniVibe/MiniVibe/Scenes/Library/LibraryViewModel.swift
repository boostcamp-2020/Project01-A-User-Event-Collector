//
//  LibraryViewModel.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/08.
//

import Foundation
import Combine

class LibraryViewModel: MiniVibeViewModel, ObservableObject {
    @Published var tracks = [Track]()
    
    private let manager: AnalyticsManager
    
    init(manager: AnalyticsManager) {
        self.manager = manager
        super.init()
    }
    
    func fetch() {
        self.tracks = TestData.playlist.tracks ?? []
        //TODO: 코어 데이터에 있는 track 배열 가져오기
    }
    
}
