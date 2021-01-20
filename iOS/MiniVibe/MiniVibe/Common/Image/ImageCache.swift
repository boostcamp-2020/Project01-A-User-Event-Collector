//
//  ImageCache.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/08.
//

import UIKit
import Combine

final class ImageCache: CacheService<NSData> {
    static let shared = ImageCache()
    var imageCache = CacheService<UIImage>()
    
    private override init() {
        super.init()
    }
}
