//
//  ButtonStyle.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/28.
//

import SwiftUI

struct TrackListButtonStyle: ViewModifier {
    func body(content: Content) -> some View {
        content
            .padding()
            .frame(maxWidth: .infinity)
            .foregroundColor(.primary)
            .background(Color.secondary)
            .cornerRadius(6.0)
    }
}
