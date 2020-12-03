//
//  AsyncImage.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/02.
//

import SwiftUI

struct AsyncImage: View {
    @StateObject private var loader: ImageLoader
    let url: URL?
    
    init(url: URL?) {
        _loader = StateObject(wrappedValue: ImageLoader(cache: Environment(\.imageCache).wrappedValue))
        self.url = url
    }
    
    var body: some View {
        content
            .onAppear {
                loader.load(url: url)
            }
    }
    
    private var content: some View {
        Group {
            if let image = loader.image {
                Image(uiImage: image)
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                
            } else {
                ActivityIndicatorView()
                    .padding()
            }
        }
    }
    
}
