//
//  RouterProtocol.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

protocol RoutingStarterProtocol {
    
}

protocol RouterProtocol {
    associatedtype RoutingStarter
    func getDestination() -> AnyView
}
