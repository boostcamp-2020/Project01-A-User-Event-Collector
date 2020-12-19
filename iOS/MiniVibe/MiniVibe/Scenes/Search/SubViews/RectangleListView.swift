//
//  RectangleListView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/01.
//

import SwiftUI
import DiveEventCollector

struct RectangleListView: View {
    private let manager: EventManager
    init(manager: EventManager) {
        self.manager = manager
    }

    private let layout = [GridItem(.flexible())]
    
    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            LazyHGrid(rows: layout,
                      spacing: 20) {
                RectangleCellView(manager: manager)
                RectangleCellView(manager: manager)
                RectangleCellView(manager: manager)
            }
        }
    }
}

struct RectangleListView_Previews: PreviewProvider {
    static var previews: some View {
        RectangleListView(manager: EventManager(serverEngine: nil, backupEngine: nil, alertEngine: nil))
    }
}
