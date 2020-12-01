//
//  TrackGroupView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/01.
//

import SwiftUI

struct TrackGroupView: View {
    var trackGroup: TrackGroup
    var body: some View {
        VStack {
            ForEach(trackGroup.tracks) { track in
                TrackCellView(track: track)
            }
        }
        .onAppear{
        }
    }
}

struct TrackGroupView_Previews: PreviewProvider {
    static var previews: some View {
        TrackGroupView(trackGroup: TrackGroup(tracks: TestData.playlist.tracks!))
    }
}
