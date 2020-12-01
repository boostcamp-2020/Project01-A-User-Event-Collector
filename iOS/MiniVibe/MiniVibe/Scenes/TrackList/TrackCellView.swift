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
    @State var isFavorite = false
    
    var body: some View {
        HStack {
            Button(action: {
                nowPlayingViewModel.updateWith(track: track)
            }, label: {
                TrackInfoView(title: track.trackName, artist: track.artists.first?.name ?? "")
            })
            HStack(spacing: 20) {
                Heart(isFavorite: $isFavorite, toggleFavorite: didToggleFavorite)
                Ellipsis()
            }
        }
    }
}

struct Heart: View {
    @Binding var isFavorite: Bool
    let toggleFavorite: (() -> Void)?
    
    var body: some View {
        Button(action: {
            toggleFavorite?()
            isFavorite.toggle()
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
//                .padding(.horizontal, 10)
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


struct TrackCellView_Previews: PreviewProvider {
    
    static var previews: some View {
        let testTrack1 = TestData.playlist.tracks.first!
        
        Group {
            TrackCellView(track: testTrack1)
            
        }
        .previewLayout(.sizeThatFits)
    }
}


