//
//  TrackCellViewModel.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/08.
//

import SwiftUI
import Combine
import CoreData

class TrackCellViewModel: MiniVibeViewModel, ObservableObject {
    @Environment(\.managedObjectContext) private var context
    @Published var track: Track
    @Published var isFavorite = false
    
    private var cancellables = Set<AnyCancellable>()
    
    init(track: Track) {
        self.track = track
        super.init()
        toggleSubscription()
    }
    
    func didToggleFavorite() {
        isFavorite.toggle()
    }
    
    func toggleSubscription() {
        $isFavorite
            .sink { [weak self] isFavorite in
                self?.post(isFavorite: isFavorite)
            }
            .store(in: &cancellables)
    }
    
    private func post(isFavorite: Bool) {
        postToServer()
        postToCoreData(isFavorite: isFavorite)
    }
    
    private func postToServer() {
        // TODO:- Server로 isFavorite update
    }
    
    private func postToCoreData(isFavorite: Bool) {
        if isFavorite {
            addToCoreData()
        } else {
            deleteFromCoreData()
        }
    }
    
    private func addToCoreData() {
        // 중복 체크
        if isDuplicated(id: track.id) {
            return
        }
        // Track 추가
        let coreTrack = CoreTrack(context: context)
        coreTrack.id = Int64(track.id)
        coreTrack.name = track.name
        coreTrack.albumTrackNumber = Int64(track.albumTrackNumber)
        // Artists 추가
        track.artists?.forEach { artist in
            let coreArtist = CoreArtist(context: context)
            coreArtist.id = Int64(artist.id)
            coreArtist.name = artist.name
            coreArtist.cover = loadFromCache(urlString: artist.cover)
            coreArtist.addToTracks(coreTrack)
        }
        // Album 추가
        guard let album = track.album else { return }
        let coreAlbum = CoreAlbum(context: context)
        coreAlbum.id = Int64(album.id)
        coreAlbum.descript = album.description
        coreAlbum.cover = loadFromCache(urlString: album.cover)
        coreAlbum.addToTracks(coreTrack)
        
        saveCoreData()
    }
    
    private func fetchFromCoreData(id: Int) -> [CoreTrack] {
        var coreTracks = [CoreTrack]()
        do {
            let request = CoreTrack.fetchRequest() as NSFetchRequest<CoreTrack>
            let predicate = NSPredicate(format: "id Contains %@", id)
            request.predicate = predicate
            coreTracks = try context.fetch(request)
        } catch {
            print(error)
        }
        return coreTracks
    }
    
    private func isDuplicated(id: Int) -> Bool {
        if fetchFromCoreData(id: track.id).count > 0 {
            return true
        }
        return false
    }
    
    private func deleteFromCoreData() {
        let coreTracks = fetchFromCoreData(id: track.id)
        coreTracks.forEach { track in
            context.delete(track)
        }
        saveCoreData()
    }
    
    private func loadFromCache(urlString: String?) -> Data? {
        let imageCache = ImageCache.shared
        guard let urlString = urlString,
              let data = imageCache.get(forKey: urlString) else {
            return nil
        }
        return data as Data
    }
    
    private func saveCoreData() {
        do {
            try context.save()
        } catch {
            print(error)
        }
    }
    
}
