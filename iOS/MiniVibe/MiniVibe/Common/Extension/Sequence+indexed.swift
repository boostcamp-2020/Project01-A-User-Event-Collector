//
//  Sequence+indexed.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/25.
//

import Foundation

extension Sequence {
    func indexed() -> [ (offset: Int, element: Element) ] {
        return Array(enumerated())
    }
}
