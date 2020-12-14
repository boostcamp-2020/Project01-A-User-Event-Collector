//
//  MiniVibeUITests.swift
//  MiniVibeUITests
//
//  Created by 류연수 on 2020/11/20.
//

import XCTest

class MiniVibeUITests: XCTestCase {
    
    var app: XCUIApplication!
    
    override func setUp() {
        super.setUp()
        continueAfterFailure = false
        
        app = XCUIApplication()
    }
    
    func testAppLaunch() throws {
        //앱 실행시 이벤트 수집이 제대로 이루어지는지 test
        app.launch()
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(ScreenEvent.screenViewed(.today)))
    }
    
    func testTabBarEvent() throws {
        //TabBar에서 화면 전환 이벤트 제집이 제대로 이루어지는지 test
        app.launch()
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(ScreenEvent.screenViewed(.today)))
        app.staticTexts["차트"].tap()
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(ScreenEvent.screenViewed(.chart)))
        app.staticTexts["검색"].tap()
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(ScreenEvent.screenViewed(.searchBefore)))
        app.staticTexts["보관함"].tap()
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(ScreenEvent.screenViewed(.library)))
    }
    
    func testSearchViewEvent() throws {
        //검색화면에서 이벤트 수집이 제대로 이루어지는지 test
        app.launch()
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(ScreenEvent.screenViewed(.today)))
        app.staticTexts["검색"].tap()
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(ScreenEvent.screenViewed(.searchBefore)))
    }
    
    func testPlayerEvent() throws {
        // 재생화면에서 이벤트 수집이 제대로 이루어지는지 test
        app.launch()
        let nowPlayingButton = app.buttons["NowPlayingView"]
        let repeatButton = app.buttons["Repeat"]
        let shuffleButton = app.buttons["Shuffle"]
        let closePlayerButton = app.buttons["ClosePlayer"]
        let pauseOrPlayButton = app.buttons["PauseOrPlay"]
        
        nowPlayingButton.tap()
        _ = app.alerts.element.waitForExistence(timeout: 1)
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(ScreenEvent.playerPushed))
        
        repeatButton.tap()
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(PlayerEvent.repeatOn))
        shuffleButton.tap()
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(PlayerEvent.shuffleOn))
        repeatButton.tap()
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(PlayerEvent.repeatOff))
        shuffleButton.tap()
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(PlayerEvent.shuffleOff))
        pauseOrPlayButton.tap()
        XCTAssertTrue(app.isDisplayingAlertWithOutMetaDataForEvent(PlayerEvent.trackPlayed(1)))
        pauseOrPlayButton.tap()
        XCTAssertTrue(app.isDisplayingAlertWithOutMetaDataForEvent(PlayerEvent.trackPaused(1)))
        closePlayerButton.tap()
        _ = app.alerts.element.waitForExistence(timeout: 1)
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(ScreenEvent.playerPopped))
    }
    
    func testChartViewEvent() throws {
        //차트화면에서 이벤트 수집이 제대로 이루어지는지 test
        app.launch()
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(ScreenEvent.screenViewed(.today)))
        app.staticTexts["차트"].tap()
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(ScreenEvent.screenViewed(.chart)))
        app.staticTexts["더보기"].tap()
        XCTAssertTrue(app.isDisplayingAlertWithMetaDataForEvent(ScreenEvent.screenViewedWithSource(.playlist, source: .chart)))
        
        app.buttons["PLAY"].tap()
        XCTAssertTrue(app.isDisplayingAlertWithOutMetaDataForEvent(PlayerEvent.trackPlayed(1)))
        
        app/*@START_MENU_TOKEN@*/.buttons["SHUFFLE"]/*[[".scrollViews.buttons[\"SHUFFLE\"]",".buttons[\"SHUFFLE\"]"],[[[-1,1],[-1,0]]],[0]]@END_MENU_TOKEN@*/.tap()
        XCTAssertTrue(app.isDisplayingAlertWithOutMetaDataForEvent(PlayerEvent.trackPlayed(1)))
    }
    //test 완료
    
}

