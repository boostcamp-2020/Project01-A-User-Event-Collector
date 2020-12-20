//
//  User.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/30.
//

import Foundation

struct User: Codable {
    let name: String
    
    enum CodingKeys: String, CodingKey {
        case name = "userName"
    }
}
