//
//  Persistence.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/11/20.
//

import CoreData

class PersistenceController {
    
    static let shared = PersistenceController()
    
    private init() { }
    
    private lazy var container: NSPersistentContainer = {
        let container = NSPersistentContainer(name: "MiniVibe")
        container.loadPersistentStores { (description, error) in
            if let error = error as NSError? {
                print("Unresolved error \(error), \(error.userInfo)")
            }
        }
        return container
    }()
    
    lazy var context: NSManagedObjectContext = {
        container.newBackgroundContext()
    }()
    
    func fetch<T: NSManagedObject>(request: NSFetchRequest<T>) -> [T] {
        var coreDatas: [T] = []
        do {
            coreDatas = try context.fetch(request)
        } catch {
            print(error)
        }
        return coreDatas
    }
    
    func delete<T: NSManagedObject>(data: T) -> CoreDataResult {
        context.delete(data)
        return save()
    }
    
    func deleteAll<T: NSManagedObject>(datas: [T]) -> CoreDataResult {
        datas.forEach { data in
            context.delete(data)
        }
        return save()
    }
    
    func deleteAll<T: NSManagedObject>(request: NSFetchRequest<T>) -> CoreDataResult {
        let request = T.fetchRequest()
        let delete = NSBatchDeleteRequest(fetchRequest: request)
        do {
            try context.execute(delete)
        } catch {
            return .failure(.deleteAllFailed)
        }
        return .success
    }
    
    func save() -> CoreDataResult {
        do {
            try context.save()
        } catch {
            return .failure(.saveFailed)
        }
        return .success
    }
    
    enum CoreDataResult {
        case success
        case failure(CoreDataError)
    }
    
    enum CoreDataError: Error {
        case deleteFailed
        case saveFailed
        case deleteAllFailed
    }
}
