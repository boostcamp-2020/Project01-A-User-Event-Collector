//
//  TrackCell.swift
//  DemoTrackView
//
//  Created by 강병민 on 2020/11/22.
//

import SwiftUI

struct TrackCellView: View {

    let id: Int
    let title: String
    let artist: String
    let isFavorite: Bool
    var didToggleFavorite: (() -> Void)?

    var body: some View {
        HStack {
            Image(title)
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 44, height: 44, alignment: .center)
                .padding(.vertical, 2)
                .padding(.horizontal, 10)
            TrackInfo(title: title, artist: artist)
            Spacer()
            HStack(spacing: 20) {
                Heart(isFavorite: isFavorite, toggleFavorite: didToggleFavorite)
                Ellipsis()
            }
            .padding(18)
        }
        .onTapGesture(perform: {
            print("tapped \(title)")
        })
    }
    
}

extension TrackCellView {
    init(track: Track) {
        title = track.title
        artist = track.artist
        isFavorite = track.isFavorite
        id = track.id
    }
}


struct Heart: View {
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

struct Ellipsis: View {
    var body: some View {
        Button(action: {
            print("show menu")
            
        }, label: {
            Image(systemName: "ellipsis")
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 20, height: 20, alignment: .center)
                .accentColor(.gray)

        })
        .buttonStyle(BorderlessButtonStyle())
    }
}

struct TrackInfo: View {
    let title: String
    let artist: String
    
    var body: some View {
        
        VStack(alignment: .leading) {
            Text(title)
                .font(.headline)
            Text(artist)
                .font(.subheadline)
                .foregroundColor(.secondary)
        }
    }
}

 
struct TrackCellView_Previews: PreviewProvider {

    static var previews: some View {
        let testTrack1 = Track(id: 1, title: "우산", artist: "BLACKPINK", isFavorite: true)
        let testTrack2 = Track(id: 2, title: "마지막처럼", artist: "BLACKPINK", isFavorite: false)

        Group {
            TrackCellView(track: testTrack1)
            TrackCellView(track: testTrack2)
                .preferredColorScheme(.dark)

        }
        .previewLayout(.sizeThatFits)
    }
}


