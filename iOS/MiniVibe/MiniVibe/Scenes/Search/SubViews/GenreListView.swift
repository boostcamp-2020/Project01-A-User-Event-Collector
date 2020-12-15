//
//  GenreListView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI

struct GenreListView: View {
    private let manager: AnalyticsManager
    init(manager: AnalyticsManager) {
        self.manager = manager
    }

    private let layout = [
        GridItem(.flexible()),
        GridItem(.flexible())
    ]
    
    var body: some View {
        LazyVGrid(columns: layout,
                  spacing: 10) {
            GenreCellView(title: "국내 댄스") {
                manager.log(ButtonEvent.genreTouched)
            }
            GenreCellView(title: "국내 발라드") {
                manager.log(ButtonEvent.genreTouched)
            }
            GenreCellView(title: "국내 락/메탈") {
                manager.log(ButtonEvent.genreTouched)
            }
            GenreCellView(title: "국내 알앤비/소울") {
                manager.log(ButtonEvent.genreTouched)
            }
            GenreCellView(title: "국내 Pop") {
                manager.log(ButtonEvent.genreTouched)
            }
            GenreCellView(title: "국내 K-Pop") {
                manager.log(ButtonEvent.genreTouched)
            }
            GenreCellView(title: "국내 일레트로닉") {
                manager.log(ButtonEvent.genreTouched)
            }
            GenreCellView(title: "국내 힙합") {
                manager.log(ButtonEvent.genreTouched)
            }
        }
    }
}

struct GenreListView_Previews: PreviewProvider {
    static var previews: some View {
        GenreListView(manager: AnalyticsManager(serverEngine: nil, backupEngine: nil, alertEngine: nil))
    }
}
