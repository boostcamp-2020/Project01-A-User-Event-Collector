//
//  DownloadAccessory.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/08.
//

import SwiftUI

struct DownloadAccessory: View {
    var isSavedToLibrary: Bool
    let toggleLiked: (() -> Void)?
    
    var body: some View {
        Button(action: {
            toggleLiked?()
        }, label: {
            Image(systemName: isSavedToLibrary ? "square.and.arrow.down.fill" : "square.and.arrow.down")
                .accesoryModifier(color: .gray, size: .medium)
        })
        .buttonStyle(BorderlessButtonStyle())
    }
}
