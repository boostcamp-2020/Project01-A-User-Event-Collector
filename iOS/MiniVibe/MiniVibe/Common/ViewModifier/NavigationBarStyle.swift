//
//  NavigationBarStyle.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

struct NavigationBarStyle: ViewModifier {
    let title: String
    
    func body(content: Content) -> some View {
        content
            .navigationTitle(title)
            .navigationBarTitleDisplayMode(.inline)
//            .foregroundColor(.primary)
    }
}
