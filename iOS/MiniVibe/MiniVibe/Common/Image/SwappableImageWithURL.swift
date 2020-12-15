//
//  SwappableImageWithURL.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/11.
//

import SwiftUI

struct SwappableImageWithURL: View {
    
    @ObservedObject var imageLoader: SwappableImageLoaderAndCache
    
    init(_ url: String?, data: Data?) {
        imageLoader = SwappableImageLoaderAndCache(imageURL: url, data: data)
    }
    
    var body: some View {
        Image(uiImage: UIImage(data: imageLoader.imageData) ?? UIImage())
            .resizable()
            .scaledToFit()
    }
}
