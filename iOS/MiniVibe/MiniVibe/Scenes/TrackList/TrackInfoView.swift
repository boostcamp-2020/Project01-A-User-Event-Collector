//
//  TrackInfoView.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/03.
//

import SwiftUI

struct TrackInfoView: View {
    let title: String
    let artist: String
    let coverURLString: String?
    
    var body: some View {
        HStack {
            AsyncImage(url: URL(string: coverURLString ?? ""))
                .frame(width: 44, height: 44, alignment: .center)
                .padding(.vertical, 2)
            VStack(alignment: .leading) {
                Text(title)
                    .modifier(Title2())
                Text(artist)
                    .modifier(Description2())
            }
            Spacer()
        }
    }
}

struct TrackInfoView_Previews: PreviewProvider {
    static var previews: some View {
        TrackInfoView(title: "title", artist: "artist", coverURLString: nil)
    }
}
