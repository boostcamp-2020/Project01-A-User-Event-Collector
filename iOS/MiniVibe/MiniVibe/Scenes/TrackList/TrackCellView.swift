//
//  TrackCell.swift
//  DemoTrackView
//
//  Created by 강병민 on 2020/11/22.
//

import SwiftUI

struct TrackCellView: View {
    let hasAccessory: Bool
    let track: Track
    var didToggleFavorite: (() -> Void)?
    @EnvironmentObject var nowPlayingViewModel: PlayerViewModel
    @State var isFavorite = false
    
    var body: some View {
        HStack {
            Button(action: {
                nowPlayingViewModel.updateWith(track: track)
            }, label: {
                TrackInfoView(title: track.trackName, artist: track.artists?.first?.name ?? "", coverURLString: track.album?.cover)
            })
            if hasAccessory {
                HStack(spacing: 20) {
                    Heart(isFavorite: $isFavorite, toggleFavorite: didToggleFavorite)
                    Ellipsis()
                }
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

struct TrackCellView_Previews: PreviewProvider {
    
    static var previews: some View {
        let testTrack1 = TestData.playlist.tracks!.first!
        
        Group {
            TrackCellView(hasAccessory: true, track: testTrack1)
            
        }
        .previewLayout(.sizeThatFits)
    }
}


