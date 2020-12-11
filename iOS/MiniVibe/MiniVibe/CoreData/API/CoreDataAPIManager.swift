//
//  CoreDataAPIManager.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/10.
//

import Foundation
import CoreData

class CoreDataAPIManager {
    let persistenceController = PersistenceController.shared
    let context: NSManagedObjectContext
    
    init() {
        context = persistenceController.context
    }
    
    func save() {
        let result = persistenceController.save()
        processResult(result: result)
    }
    
    func processResult(result: PersistenceController.CoreDataResult) {
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
}
