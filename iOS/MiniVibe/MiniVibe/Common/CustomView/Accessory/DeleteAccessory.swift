//
//  DeleteAccessory.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/15.
//

import SwiftUI

struct DeleteAccessory: View {
    let toggleDeleted: (() -> Void)?
    
    var body: some View {
        Button(action: {
            toggleDeleted?()
        }, label: {
            Image(systemName: "minus.circle")
                .accesoryModifier(color: .gray, size: .small)
                .padding([.leading, .vertical])
        })
        .buttonStyle(BorderlessButtonStyle())
    }
}
