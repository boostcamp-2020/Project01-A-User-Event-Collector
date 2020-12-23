//
//  GenreListView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI
import DiveEventCollector

struct GenreListView: View {
    private let manager: EventManager
    init(manager: EventManager) {
        self.manager = manager
    }

    private let layout = [
        GridItem(.flexible()),
        GridItem(.flexible())
    ]
    
    var body: some View {
        LazyVGrid(columns: layout,
                  spacing: 10) {
            GenreCellView(title: "국내 댄스") { [weak manager = self.manager] in
                manager?.log(ButtonEvent.genreTouched)
            }
            GenreCellView(title: "국내 발라드") { [weak manager = self.manager] in
                manager?.log(ButtonEvent.genreTouched)
            }
            GenreCellView(title: "국내 락/메탈") { [weak manager = self.manager] in
                manager?.log(ButtonEvent.genreTouched)
            }
            GenreCellView(title: "국내 알앤비/소울") { [weak manager = self.manager] in
                manager?.log(ButtonEvent.genreTouched)
            }
            GenreCellView(title: "국내 Pop") { [weak manager = self.manager] in
                manager?.log(ButtonEvent.genreTouched)
            }
            GenreCellView(title: "국내 K-Pop") { [weak manager = self.manager] in
                manager?.log(ButtonEvent.genreTouched)
            }
            GenreCellView(title: "국내 일레트로닉") { [weak manager = self.manager] in
                manager?.log(ButtonEvent.genreTouched)
            }
            GenreCellView(title: "국내 힙합") { [weak manager = self.manager] in
                manager?.log(ButtonEvent.genreTouched)
            }
        }
    }
}

struct GenreListView_Previews: PreviewProvider {
    static var previews: some View {
        GenreListView(manager: EventManager(serverEngine: nil, backupEngine: nil, alertEngine: nil))
    }
}
