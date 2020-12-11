//
//  ImageCache.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/08.
//

import Foundation

final class ImageCache: CacheService<NSData> {
    static let shared = ImageCache()
    // TODO:- cache.countLimit = 허용하는 key의 개수 설정 할지
    // TODO:- cache.totalCostLimit = cost 합계의 최댓값
    private override init() {
        super.init()
    }
}
