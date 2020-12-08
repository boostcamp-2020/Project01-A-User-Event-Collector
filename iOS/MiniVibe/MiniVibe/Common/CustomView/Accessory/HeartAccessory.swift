//
//  HeartAccessory.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/08.
//

import SwiftUI

struct HeartAccessory: View {
    var isFavorite: Bool
    let toggleFavorite: (() -> Void)?
    
    var body: some View {
        Button(action: {
            toggleFavorite?()
        }, label: {
            Image(systemName: isFavorite ? "heart.fill" : "heart")
                .accesoryModifier(color: .red, size: .small)
        })
        .buttonStyle(BorderlessButtonStyle())
    }
}
