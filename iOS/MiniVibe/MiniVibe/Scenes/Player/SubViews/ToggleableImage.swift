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
    let imageWhenFalse: String
    let size: Image.AccessorySize
    var eventHandler: (() -> Void)?
    
    var body: some View {
        Button(action: {
            isEnabled.toggle()
            self.eventHandler?()
        }, label: {
            if isEnabled {
                Image(systemName: imageWhenTrue)
                    .accesoryModifier(color: .red, size: size)
            } else {
                Image(systemName: imageWhenFalse)
                    .accesoryModifier(color: .gray, size: size)

            }
        })
        .accentColor(.primary)
    }
}
