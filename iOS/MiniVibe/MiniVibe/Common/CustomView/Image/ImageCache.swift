//
//  ImageCache.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/08.
//

import Foundation

final class ImageCache: CacheService<NSData> {
    static let shared = ImageCache()
    private override init() {
        super.init()
    }
}
