//
//  URLImage.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/04.
//

import SwiftUI
import Combine

struct URLImage: View {
    @StateObject private var imageLoader = URLImageLoader()

    private let urlString: String?
    private let imageData: Data?

    init(urlString: String?, imageData: Data? = nil) {
        self.urlString = urlString
        self.imageData = imageData
    }

    var body: some View {
        content
            .onAppear { [weak imageLoader = self.imageLoader] in
                imageLoader?.fetch(urlString: urlString, imageData: imageData)
            }
    }

    private var content: some View {
        Group { [weak imageLoader = self.imageLoader] in
            if let image = imageLoader?.image {
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

struct URLImage_Previews: PreviewProvider {
    static var previews: some View {
        URLImage(urlString: "", imageData: nil)
    }
}
