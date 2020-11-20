//
//  MiniVibeApp.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/20.
//

import SwiftUI

@main
struct MiniVibeApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
