//
//  Rectangle+Modifier.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/02.
//

import SwiftUI

extension Rectangle {
    func clearBottom() -> some View {
        self
            .fill(Color.clear)
            .frame(height: 50)
            .listRowInsets(EdgeInsets())
    }
}
