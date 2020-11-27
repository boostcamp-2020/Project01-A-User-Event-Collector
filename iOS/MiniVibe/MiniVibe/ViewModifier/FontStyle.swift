//
//  FontStyle.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

struct Title: ViewModifier {
    func body(content: Content) -> some View {
        content
            .font(.headline)
            .foregroundColor(.primary)
            .lineLimit(1)
            .truncationMode(.tail)
    }
}

struct Description: ViewModifier {
    func body(content: Content) -> some View {
        content
            .font(.subheadline)
            .foregroundColor(.secondary)
            .lineLimit(1)
            .truncationMode(.tail)
    }
}
