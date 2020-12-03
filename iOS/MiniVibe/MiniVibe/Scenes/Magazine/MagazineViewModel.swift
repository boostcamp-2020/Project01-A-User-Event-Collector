//
//  MagazineViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/02.
//

import Foundation

class MagazineViewModel: MiniVibeViewModel, ObservableObject {
    @Published var magazine: Magazine?
    
    func fetch(id: Int) {
        internalFetch(endPoint: .magazines, id: id) { [weak self] data in
            if let decodedData = try? JSONDecoder().decode(MagazineReponse.self, from: data) {
                DispatchQueue.main.async {
                    self?.magazine = decodedData.magazine
                }
            }
        }
    }
}
