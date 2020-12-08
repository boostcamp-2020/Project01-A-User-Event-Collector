//
//  MiniVibeApp.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/20.
//

import SwiftUI

@main
struct MiniVibeApp: App {
    
    let manager = AnalyticsManager(engine: MockAnalyticsEngine())
    let persistenceContainer = PersistenceController.shared.container

    var body: some Scene {
        WindowGroup {
            CustomTabView(manager: manager)
                .environment(\.managedObjectContext, persistenceContainer.viewContext)
        }
    }
}
