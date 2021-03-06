//
//  RouterProtocol.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import SwiftUI

protocol RoutingTypeProtocol {
    
}

protocol StarterOrientedRouterProtocol {
    associatedtype RoutingStarter
    func getDestination(id: Int) -> AnyView
}

protocol DestinationOrientedRouterProtocol {
    associatedtype RoutingType
    func getDestination(to routingDestination: RoutingType, with: Int?) -> AnyView
}
