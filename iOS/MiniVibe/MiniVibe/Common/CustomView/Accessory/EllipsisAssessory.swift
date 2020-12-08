//
//  EllipsisAssessory.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/08.
//

import SwiftUI

struct EllipsisAssessory: View {
    var body: some View {
        Button(action: {
            print("show menu")
            
        }, label: {
            Image(systemName: "ellipsis")
                .accesoryModifier(color: .gray, size: .small)
            
        })
        .buttonStyle(BorderlessButtonStyle())
    }
}
