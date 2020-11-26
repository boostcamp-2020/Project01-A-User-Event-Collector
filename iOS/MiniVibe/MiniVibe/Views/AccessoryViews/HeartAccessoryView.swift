//
//  HeartAccessoryView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/23.
//

import SwiftUI

struct HeartAccessoryView: View {
    var isFavorite: Bool
    let toggleFavorite: (() -> Void)?
    
    var body: some View {
        Button(action: {
            toggleFavorite?()
        }, label: {
            Image(systemName: isFavorite ? "heart.fill" : "heart")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 20, height: 20, alignment: .center)
                .accentColor(.red)

        })
        .buttonStyle(BorderlessButtonStyle())
    }
}

struct HeartAccessoryView_Previews: PreviewProvider {
    static var previews: some View {
        HeartAccessoryView(isFavorite: true, toggleFavorite: nil)
    }
}
