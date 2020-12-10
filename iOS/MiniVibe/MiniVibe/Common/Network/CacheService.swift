//
//  CacheService.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/08.
//

import Foundation

class CacheService<T: AnyObject> {
    var cache = NSCache<NSString, T>()
    
    func get(forKey: String) -> T? {
        return cache.object(forKey: NSString(string: forKey))
    }
    
    func set(forKey: String, data: T) {
        cache.setObject(data, forKey: NSString(string: forKey))
    }
}
