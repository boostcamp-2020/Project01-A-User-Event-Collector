//
//  ToggleableImage.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/07.
//

import SwiftUI

struct ToggleableImage: View {
    @Binding var isEnabled: Bool
    let imageWhenTrue: String
    let colorWhenTrue: Color
    let imageWhenFalse: String
    let colorWhenFalse: Color
    let size: Image.AccessorySize
    var eventHandler: (() -> Void)?
    
    var body: some View {
        Button(action: {
            isEnabled.toggle()
            eventHandler?()
        }, label: {
            if isEnabled {
                Image(systemName: imageWhenTrue)
                    .accesoryModifier(color: colorWhenTrue, size: size)
            } else {
                Image(systemName: imageWhenFalse)
                    .accesoryModifier(color: colorWhenFalse, size: size)

            }
        })
        .accentColor(.primary)
    }
}
