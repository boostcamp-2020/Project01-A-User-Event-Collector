//
//  DeallocPrinter.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/14.
//

import Foundation

class DeallocPrinter {
    let target: String
    
    init(target: String) {
        print("\(target) DeallocPrinter init")
        self.target = target
    }
    
    deinit {
        print("\(target) deinit")
    }
}
