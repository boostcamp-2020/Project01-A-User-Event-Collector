//
//  DJStation.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/11/25.
//

import Foundation

struct DJStation: Codable, Identifiable {
    let id: Int
    let stationName: String
    let cover: String
    let popularity: Int
}

struct DJStationResponse: Codable {
    let djStations: [DJStation]

    enum CodingKeys: String, CodingKey {
        case djStations = "DJStations"
    }
}
