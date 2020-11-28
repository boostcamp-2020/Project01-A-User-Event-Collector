//
//  TrackCell.swift
//  DemoTrackView
//
//  Created by 강병민 on 2020/11/22.
//

import SwiftUI

struct TrackCellView: View {
    
    let track: Track
    var didToggleFavorite: (() -> Void)?
    @EnvironmentObject var nowPlayingViewModel: PlayerViewModel
    
    var body: some View {
        HStack {
            Button(action: {
                nowPlayingViewModel.updateWith(track: track)
            }, label: {
                TrackInfoView(title: track.title, artist: track.artist)
            })
            HStack(spacing: 20) {
                Heart(isFavorite: track.isFavorite, toggleFavorite: didToggleFavorite)
                Ellipsis()
            }
        }
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
                .accesoryModifier(color: .red, size: .small)
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
                .accesoryModifier(color: .gray, size: .small)
            
        })
        .buttonStyle(BorderlessButtonStyle())
    }
}

struct TrackInfoView: View {
    let title: String
    let artist: String
    
    var body: some View {
        HStack {
            Image(title)
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 44, height: 44, alignment: .center)
                .padding(.vertical, 2)
                .padding(.horizontal, 10)
            VStack(alignment: .leading) {
                Text(title)
                    .modifier(Title())
                Text(artist)
                    .modifier(Description())
            }
            Spacer()
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


