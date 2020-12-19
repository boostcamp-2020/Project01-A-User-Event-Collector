//
//  AlertAnalyticsEngine.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/13.
//

import UIKit

class AlertAnalyticsEngine: AnalyticsPostEngine {
    private var window: UIWindow? {
        UIApplication.shared.windows.filter {$0.isKeyWindow}.first
    }
    
    func send<T>(_ event: T) where T: AnalyticsEvent {
        var message = "Metadata: "
        if let metadata = event.metadata {
            for (key, value) in metadata {
                message.append("(\(key), \(value))")
            }
        }
        let alert = UIAlertController(
            title: "Analytics event: \(event.name)",
            message: message,
            preferredStyle: .alert
        )

        alert.addAction(UIAlertAction(
            title: "Dismiss",
            style: .cancel,
            handler: nil
        ))

        // In order to handle both view controllers presented as part of a
        // container view controller and as modals, we need to check if there's
        // currently a presented view controller.
        guard let window = window else { return }
        var viewController = window.rootViewController

        if let presentedViewController = viewController?.presentedViewController {
            viewController = presentedViewController
        }

        viewController?.present(alert, animated: false, completion: nil)
    }
}
