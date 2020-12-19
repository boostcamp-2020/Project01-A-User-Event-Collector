//
//  SearchBefore.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/05.
//

import SwiftUI
import DiveEventCollector

struct SearchBeforeView: View {
    private let manager: EventManager
    init(manager: EventManager) {
        self.manager = manager
    }
    var body: some View {
        VStack {
            RectangleListView(manager: manager)
            Spacer()
            HStack {
                Text("장르")
                    .modifier(Title1())
                Spacer()
            }
            GenreListView(manager: manager)
        }
    }
}

struct SearchBefore_Previews: PreviewProvider {
    static var previews: some View {
        SearchBeforeView(manager: EventManager(serverEngine: nil, backupEngine: nil, alertEngine: nil))
    }
}
