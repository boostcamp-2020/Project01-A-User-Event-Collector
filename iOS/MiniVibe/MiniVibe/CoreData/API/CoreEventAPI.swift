//
//  CoreEventAPI.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/10.
//

import Foundation
import CoreData

class CoreEventAPI {
    private let manager = CoreDataAPIManager()
    private let controller: PersistenceController
    private let context: NSManagedObjectContext
    
    init() {
        self.controller = manager.persistenceController
        self.context = manager.context
    }
    
    func create(with event: Event) {
        let coreEvent = CoreEvent(context: context)
        coreEvent.id = UUID()
        coreEvent.createdAt = event.createdAt
        coreEvent.name = event.name
        event.metadata?.forEach {
            let coreEventMetadata = CoreEventMetadata(context: context)
            coreEventMetadata.key = $0.key
            coreEventMetadata.value = $0.value
            coreEventMetadata.event = coreEvent
        }
        manager.save()
    }
    
    func deleteAll() {
        let request = CoreEvent.fetchRequest() as NSFetchRequest<CoreEvent>
        let result = controller.deleteAll(request: request)
        manager.processResult(result: result)
    }
    
    func fetchAll() -> [BaseEvent] {
        let sortDescriptor = NSSortDescriptor(keyPath: \CoreEvent.createdAt, ascending: true)
        let request = CoreEvent.fetchRequest() as NSFetchRequest<CoreEvent>
        request.sortDescriptors = [sortDescriptor]
        let coreEvents = controller.fetch(request: request)
        var events = [BaseEvent]()
        coreEvents.forEach { coreEvent in
            if let name = coreEvent.name {
                let metadatas = convert(with: coreEvent.metadatas)
                let event = BaseEvent(name: name,
                                      createdAt: coreEvent.createdAt,
                                      metadata: metadatas)
                events.append(event)
            }
        }
        return events
    }
    
    private func convert(with coreMetadatas: NSSet?) -> [String: String]? {
        guard let coreMetadatas = coreMetadatas else { return nil }
        var metadatas = [String : String]()
        coreMetadatas.forEach { metadata in
            if let metadata = metadata as? CoreEventMetadata,
               let key = metadata.key,
               let value = metadata.value {
                metadatas[key] = value
            }
        }
        return metadatas.isEmpty ? nil : metadatas
    }
}
