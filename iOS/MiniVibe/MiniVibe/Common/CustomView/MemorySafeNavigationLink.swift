//
//  MemorySafeNavigationLink.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/05.
//

import SwiftUI

struct MemorySafeNavigationLink<Content: View>: View {
    let contentView: Content
    let destination: AnyView
    
    var body: some View {
        ZStack {
            contentView
            NavigationLink(
                destination: LazyView(destination),
                label: {
                    Rectangle().hidden()
                }
            )
        }
    }  
}

struct LazyView<Content: View>: View {
    let build: () -> Content
    init(_ build: @autoclosure @escaping () -> Content) {
        self.build = build
    }
    var body: Content {
        build()
    }
}
