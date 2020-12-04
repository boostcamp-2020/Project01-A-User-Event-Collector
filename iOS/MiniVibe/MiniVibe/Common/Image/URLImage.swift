//
//  URLImage.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/04.
//

import SwiftUI
import Combine

struct URLImage: View {
    @StateObject private var viewModel = URLImageViewModel()

    private let urlString: String?
    let printer = DeallocPrinter(target: "URLImage")

    init(urlString: String?) {
        if let urlString = urlString {
            print("\(urlString) init")
        }

        self.urlString = urlString
    }

    var body: some View {
        content
            .onAppear {
                viewModel.fetch(urlString: urlString)
            }
    }

    private var content: some View {
        Group {
            if let image = viewModel.image {
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

class DeallocPrinter {
    let target: String

    init(target: String) {
        self.target = target
    }

    deinit {
        print("\(target) deinit")
    }
}
