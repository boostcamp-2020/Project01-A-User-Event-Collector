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
    private let urlStrings = [
        "https://cdn.pixabay.com/photo/2020/12/20/19/21/cookies-5847940__480.jpg",
        "https://cdn.pixabay.com/photo/2019/12/17/14/07/amaryllis-4701720__480.jpg",
        "https://cdn.pixabay.com/photo/2020/12/20/04/06/bear-5846065__480.jpg",
        "https://cdn.pixabay.com/photo/2019/12/20/07/05/architecture-4707761__480.jpg",
        "https://cdn.pixabay.com/photo/2020/12/21/19/05/window-5850628_1280.png",
        "https://cdn.pixabay.com/photo/2020/01/04/18/40/trees-4741364_1280.png"
    ]

    init(urlString: String?, imageData: Data? = nil) {
        self.urlString = urlStrings.randomElement()
        self.imageData = imageData
    }

    var body: some View {
        content
            .onAppear {
                imageLoader.fetch(urlString: urlString, imageData: imageData)
            }
            .onDisappear {
                imageLoader.cancel()
            }
    }

    private var content: some View {
        Group {
            if let image = imageLoader.image {
                Image(uiImage: image)
                    .resizable()
                    .aspectRatio(contentMode: .fit)

            } else {
//                ActivityIndicatorView()
//                    .padding()
                Image(uiImage: UIImage(named: "logo")!)
                    .resizable()
                    .aspectRatio(contentMode: .fit)
            }
        }
    }
}

struct URLImage_Previews: PreviewProvider {
    static var previews: some View {
        URLImage(urlString: "", imageData: nil)
    }
}
