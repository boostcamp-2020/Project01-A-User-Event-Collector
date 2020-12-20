//
//  Data+PrettifyJSONString.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/11.
//

import Foundation

extension Data {
    var prettifyJSONString: NSString? {
        guard let object = try? JSONSerialization.jsonObject(with: self, options: []),
              let data = try? JSONSerialization.data(withJSONObject: object, options: [.prettyPrinted]),
              let prettifyJSONString = NSString(data: data, encoding: String.Encoding.utf8.rawValue) else { return nil }

        return prettifyJSONString
    }
}
