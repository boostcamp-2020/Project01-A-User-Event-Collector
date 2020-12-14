//
//  XCUIApplication+Alert.swift
//  MiniVibeUITests
//
//  Created by 강병민 on 2020/12/14.
//

import XCTest

extension XCUIApplication {
    func isDisplayingAlertWithMetaDataForEvent(_ event: AnalyticsEvent) -> Bool {
        let alert = alerts.element
        
        // alert 존재 여부 판단
        guard alert.exists else {
            return false
        }
        
        let expectedTitle = "Analytics event: \(event.name)"
        var expectedMessage = "Metadata: "
        
        if let metadata = event.metadata {
            for (key, value) in metadata {
                expectedMessage.append("(\(key), \(value))")
            }
        }
        
        // alert에 수집하고자 하는 이벤트가 맞는지 판단
        guard alert.staticTexts[expectedTitle].exists else {
            return false
        }
        
        guard alert.staticTexts[expectedMessage].exists else {
            return false
        }
        
        return true
    }
    
    // track id처럼 metadata를 사전에 알수 없는 경우를 위해
    // event name 일치 여부만 판단
    func isDisplayingAlertWithOutMetaDataForEvent(_ event: AnalyticsEvent) -> Bool {
        let alert = alerts.element
        
        // alert 존재 여부 판단
        guard alert.exists else {
            return false
        }
        
        let expectedTitle = "Analytics event: \(event.name)"
        var expectedMessage = "Metadata: "
        
        if let metadata = event.metadata {
            for (key, value) in metadata {
                expectedMessage.append("(\(key), \(value))")
            }
        }
        
        // alert에 수집하고자 하는 이벤트가 맞는지 판단 (meta data제외)
        guard alert.staticTexts[expectedTitle].exists else {
            return false
        }
        
        return true
    }
    
}
