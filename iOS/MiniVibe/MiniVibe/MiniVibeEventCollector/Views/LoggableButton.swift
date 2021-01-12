//
//  LoggableButton.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/09.
//

import SwiftUI
import DiveEventCollector

struct LoggableButton<T: Event, Content: View>: View {
    let content : () -> Content
    let manager: EventManager
    let event: T

    init(@ViewBuilder content: @escaping () -> Content, manager: EventManager, event: T) {
        self.content = content
        self.manager = manager
        self.event = event
    }

    var body: some View {
        Button(action: { [weak manager = manager] in
            manager?.log(event)
        }, label: {
            content()
        })
    }
}
