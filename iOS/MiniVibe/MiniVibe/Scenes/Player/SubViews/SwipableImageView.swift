//
//  SwipableImageView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/15.
//

import SwiftUI

struct SwipableImageView: View {
    @State private var offset: CGSize = .zero
    
    let urlString: String?
    let coverData: Data?
    var didSwipeLeft: (() -> Void)?
    var didSwipeRight: (() -> Void)?
    
    var body: some View {
        SwappableImageWithURL(urlString, data: coverData)
            .padding()
            .highPriorityGesture(
                DragGesture(minimumDistance: 20, coordinateSpace: .local)
                    .onChanged { gesture in
                        offset = gesture.translation
                    }
                    .onEnded { _ in
                        if offset.width > 30 {
                            didSwipeRight?()
                        }
                        if offset.width < -30 {
                            didSwipeLeft?()
                        }
                    }
            )
    }
}
