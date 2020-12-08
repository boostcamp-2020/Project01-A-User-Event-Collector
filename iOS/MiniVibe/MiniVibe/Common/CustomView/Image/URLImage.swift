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

    init(urlString: String?) {
        self.urlString = urlString
    }

    var body: some View {
        content
            .onAppear {
                imageLoader.fetch(urlString: urlString)
            }
    }

    private var content: some View {
        Group {
            if let image = imageLoader.image {
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
        URLImage(urlString: "")
    }
}

//class DeallocPrinter {
//    let target: String
//
//    init(target: String) {
//        self.target = target
//    }
//
//    deinit {
//        print("\(target) deinit")
//    }
//}
