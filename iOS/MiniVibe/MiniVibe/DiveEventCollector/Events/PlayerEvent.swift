//
//  PlayerEvent.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/07.
//

import Foundation

struct PlayerEvent: AnalyticsEvent {
    var name: String
    var createdAt: String?
    var metadata: [String: String]?
    
    private init(name: String, metadata: [String: String]? = nil) {
        self.name = name
        self.createdAt = Date().convertToStringForWeb()
        self.metadata = metadata
    }
    
    static func trackPlayed(_ trackID: Int) -> PlayerEvent {
        return PlayerEvent(
            name: "trackPlayed",
            metadata: ["trackID": "\(trackID)"]
        )
    }
    
    static func trackPaused(_ trackID: Int) -> PlayerEvent {
        return PlayerEvent(
            name: "trackPaused",
            metadata: ["trackID": "\(trackID)"]
        )
    }
    
    static func isFavorite(_ isOn: Bool, trackID: Int) -> PlayerEvent {
        let suffix = isOn ? "On" : "Off"
        return PlayerEvent(
            name: "isFavorite" + suffix,
            metadata: ["trackID": "\(trackID)"]
        )
    }
    
    static func shuffle(_ isEnabled: Bool) -> PlayerEvent {
        let suffix = isEnabled ? "On" : "Off"
        return PlayerEvent(
            name: "shuffle" + suffix
        )
    }
    
    static func `repeat`(_ isEnabled: Bool) -> PlayerEvent {
        let suffix = isEnabled ? "On" : "Off"
        return PlayerEvent(
            name: "repeat" + suffix
        )
    }
    
    static func playlistPlayed(_ isShuffled: Bool) -> PlayerEvent {
        let suffix = isShuffled ? "On" : "Off"
        return PlayerEvent(
            name: "playlistPlayed",
            metadata: ["shuffleMode": suffix]
        )
    }
    
    static let airPlayTouched = PlayerEvent(name: "airDropTouched")
    
    static let sendTouched = PlayerEvent(name: "sendTouched")
    
    static let queuelistTouched = PlayerEvent(name: "queuelistTouched")

    static let volumeChanged = PlayerEvent(name: "volumeChangedIn3Seconds")
    
    static let shuffleOn = PlayerEvent(name: "shuffleOn")
    
    static let shuffleOff = PlayerEvent(name: "shuffleOff")

    static let repeatOn = PlayerEvent(name: "repeatOn")

    static let repeatOff = PlayerEvent(name: "repeatOff")

}
