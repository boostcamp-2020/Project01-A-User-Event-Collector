//
//  CoreTrackAPI.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/09.
//

import SwiftUI
import CoreData

class CoreTrackAPI {
    private let persistenceController = PersistenceController.shared
    private let context: NSManagedObjectContext
    
    init() {
        context = persistenceController.context
    }
    
    func create(with track: Track, isQueue: Bool = false) {
        // 중복 체크
        if isDuplicated(id: track.id) {
            delete(id: track.id)
        }
        // Track 추가
        let coreTrack = CoreTrack(context: context)
        coreTrack.id = Int64(track.id)
        coreTrack.name = track.name
        coreTrack.albumTrackNumber = Int64(track.albumTrackNumber)
        if let isFavorite = track.isFavorite {
            coreTrack.isFavorite = isFavorite
        }
        coreTrack.isQueue = isQueue
        coreTrack.updatedAt = Date()
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
        
        save()
    }
    
    func delete(id: Int) {
        let predicate = NSPredicate(format: "id Contains %ld", id)
        let coreTracks = fetch(predicate: predicate)
        let result = persistenceController.deleteAll(datas: coreTracks)
        processResult(result: result)
    }
    
    func fetch(predicate: NSPredicate) -> [CoreTrack] {
        let sortDescriptor = NSSortDescriptor(keyPath: \CoreTrack.updatedAt, ascending: true)
        let request = CoreTrack.fetchRequest() as NSFetchRequest<CoreTrack>
        request.predicate = predicate
        request.sortDescriptors = [sortDescriptor]
        return persistenceController.fetch(request: request)
    }
    
    private func save() {
        let result = persistenceController.save()
        processResult(result: result)
    }
    
    private func processResult(result: PersistenceController.CoreDataResult) {
        switch result {
        case .success:
            print("success")
        case .failure(.saveFailed):
            print("saveFailed")
        case .failure(.deleteFailed):
            print("deleteFailed")
        case .failure(.deleteAllFailed):
            print("deleteAllFailed")
        }
    }
    
    private func isDuplicated(id: Int) -> Bool {
        let predicate = NSPredicate(format: "id Contains %ld", id)
        if fetch(predicate: predicate).count > 0 {
            return true
        }
        return false
    }
    
    private func loadFromCache(urlString: String?) -> Data? {
        let imageCache = ImageCache.shared
        guard let urlString = urlString,
              let data = imageCache.get(forKey: urlString) else {
            return nil
        }
        return data as Data
    }
    
}
