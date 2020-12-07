//
//  FontStyle.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

struct Title1: ViewModifier {
    func body(content: Content) -> some View {
        content
            .font(.system(size: 20, weight: .bold))
            .foregroundColor(.primary)
            .lineLimit(1)
            .truncationMode(.tail)
    }
}

struct Title2: ViewModifier {
    func body(content: Content) -> some View {
        content
            .font(.headline)
            .foregroundColor(.primary)
            .lineLimit(1)
            .truncationMode(.tail)
    }
}

struct Description1: ViewModifier {
    func body(content: Content) -> some View {
        content
            .font(.system(size: 16))
            .foregroundColor(.secondary)
            .lineLimit(1)
            .truncationMode(.tail)
    }
}

struct Description2: ViewModifier {
    func body(content: Content) -> some View {
        content
            .font(.subheadline)
            .foregroundColor(.secondary)
            .lineLimit(1)
            .truncationMode(.tail)
    }
}

struct Description1NoLimit: ViewModifier {
    func body(content: Content) -> some View {
        content
            .font(.system(size: 18))
            .foregroundColor(.secondary)
            .truncationMode(.tail)
    }
}
