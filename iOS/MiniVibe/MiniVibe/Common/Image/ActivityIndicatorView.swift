//
//  ActivityIndicatorView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/02.
//

import SwiftUI

struct ActivityIndicatorView: View {
    let style = StrokeStyle(lineWidth: 4, lineCap: .round)
    @State var animate = false
    let color1 = Color.gray
    let color2 = Color.gray.opacity(0.5)
    
    var body: some View {
        ZStack {
            Circle()
                .trim(from: 0, to: 0.2)
                .stroke(AngularGradient(gradient: .init(colors: [color1, color2]), center: .center),
                        style: style)
                .rotationEffect(Angle(degrees: animate ? 360 : 0))
                .animation(Animation.linear(duration: 0.7).repeatForever(autoreverses: false))
            Circle()
                .trim(from: 0.5, to: 0.7)
                .stroke(AngularGradient(gradient: .init(colors: [color1, color2]), center: .center),
                        style: style)
                .rotationEffect(Angle(degrees: animate ? 360 : 0))
                .animation(Animation.linear(duration: 0.7).repeatForever(autoreverses: false))
        }
        .onAppear {
            self.animate.toggle()
        }

    }
}

struct ActivityIndicatorView_Previews: PreviewProvider {
    static var previews: some View {
        ActivityIndicatorView()
            .frame(width: 100, height: 100, alignment: .center)
    }
}
