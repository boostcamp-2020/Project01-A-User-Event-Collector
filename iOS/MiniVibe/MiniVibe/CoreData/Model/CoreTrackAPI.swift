//
//  CoreTrackAPI.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/09.
//

import SwiftUI
import CoreData

class CoreTrackAPI {
    @Environment(\.managedObjectContext) private var context
    
    func addToFavorite(track: Track, isFavorite: Bool) {
        if isFavorite {
            create(with: track)
        } else {
            remove(id: track.id)
        }
    }
    
    func create(with track: Track) {
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
        
        save()
    }
    
    private func remove(id: Int) {
        let coreTracks = fetch(id: id)
        coreTracks.forEach { track in
            context.delete(track)
        }
        save()
    }
    
    private func fetch(id: Int) -> [CoreTrack] {
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
    
    private func save() {
        do {
            try context.save()
        } catch {
            print(error)
        }
    }
    
    private func isDuplicated(id: Int) -> Bool {
        if fetch(id: id).count > 0 {
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
