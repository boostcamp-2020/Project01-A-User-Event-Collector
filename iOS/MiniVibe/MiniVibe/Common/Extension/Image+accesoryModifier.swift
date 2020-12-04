//
//  Image+accesoryModifier.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/28.
//

import SwiftUI

extension Image {
    
    enum AccessorySize: CGFloat {
        case small = 20, medium = 24, large = 40
    }
    
    func fitModifier(size: CGFloat = UIScreen.main.bounds.width) -> some View {
        self
            .resizable()
            .aspectRatio(contentMode: .fit)
            .frame(width: size - 40, height: size - 40, alignment: .center)
    }
    
    func accesoryModifier(color: Color, size: AccessorySize) -> some View {
        self
            .resizable()
            .aspectRatio(contentMode: .fit)
            .frame(width: size.rawValue, height: size.rawValue, alignment: .center)
            .accentColor(color)
    }
    
    func resizeToFit(padding amount: CGFloat) -> some View {
        self
            .resizable()
            .scaledToFit()
            .padding(.all, amount)
    }
    
    func base() -> some View {
        self
            .resizable()
            .aspectRatio(contentMode: .fit)
    }
    
}
