//
//  Metadatable.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/10.
//

import Foundation

protocol Metadatable {
    var key: String { get }
    var value: String { get }
}

protocol ScreenEventable: Metadatable {
    
}

struct ScreenViewSource: ScreenEventable {
    var key = "from"
    var value: String
}

//init<T> (_ type: ScreenType, source: T) where T: ScreenEventable {
//    self.name = "\(type)Viewed"
//    self.metadata = [source.key: source.value]
//}

//static func screenViewed(_ type: ScreenType) -> ScreenEvent {
//    return ScreenEvent(name: "\(type)Viewed")
//}
//
//static func screenViewedWithSource(_ type: ScreenType, source: ScreenType) -> ScreenEvent {
//    return ScreenEvent(name: "\(type)Viewed", metadata: ["from": "\(source)"])
//}
//
////재생 화면은 좀 더 신경 써야해서 따로 빼놨습니다.
//static let playerPushed = ScreenEvent(name: "playerPushed")
//
//static let playerPopped = ScreenEvent(name: "playerPopped")
