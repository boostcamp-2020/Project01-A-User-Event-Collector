//
//  AlertEventEngine.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/13.
//
// https://www.swiftbysundell.com/articles/ui-testing-analytics-code-in-swift/ 참고

import UIKit

public final class AlertEventEngine: EventSendable {
    
    public init() {
        
    }
    
    private var window: UIWindow? {
        UIApplication.shared.windows.filter {$0.isKeyWindow}.first
    }
    
    public func send<T>(_ event: T) where T: Event {
        var message = " "
        if let metadata = event.metadata {
            for (key, value) in metadata {
                message.append("(\(key), \(value))")
            }
        }
        let alert = UIAlertController(
            title: "\(event.name)",
            message: message,
            preferredStyle: .alert
        )

        alert.addAction(UIAlertAction(
            title: "Dismiss",
            style: .cancel,
            handler: nil
        ))

        guard let window = window else { return }
        var viewController = window.rootViewController

        if let presentedViewController = viewController?.presentedViewController {
            viewController = presentedViewController
        }

        viewController?.present(alert, animated: false, completion: nil)
    }
}
