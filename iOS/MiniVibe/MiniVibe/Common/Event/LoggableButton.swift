//
//  LoggableButton.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/09.
//

import SwiftUI

struct LoggableButton<Content: View>: View {
    let content : () -> Content
    let manager: AnalyticsManager
    let event: AnalyticsEvent

    init(@ViewBuilder content: @escaping () -> Content, manager: AnalyticsManager, event: AnalyticsEvent) {
        self.content = content
        self.manager = manager
        self.event = event
    }

    var body: some View {
        Button(action: {
            manager.log(event)
        }, label: {
            content()
        })
    }
}
