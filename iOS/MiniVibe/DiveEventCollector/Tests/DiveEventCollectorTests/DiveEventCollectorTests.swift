import XCTest
@testable import DiveEventCollector

final class DiveEventCollectorTests: XCTestCase {
    func testEvent() {
        let event = BaseEvent(name: "testEvent", createdAt: nil, metadata: nil)
        XCTAssertEqual(event.name, "testEvent")
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct
        // results.
    }
}
