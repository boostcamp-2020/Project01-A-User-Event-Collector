//
//  AnalyticsEngine.swift
//  TodoApp
//
//  Created by 강병민 on 2020/12/06.
//

import Foundation

public protocol EventSendableAndFetchable: EventSendable, EventFetchable {
}

public protocol EventSendable: class {
    func send<T: AnalyticsEvent>(_ event: T)
}

public protocol EventFetchable: class {
    func fetch() -> [BaseEvent]
}
