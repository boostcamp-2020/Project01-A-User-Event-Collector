//
//  Date+StringForWeb.swift
//  MiniVibe
//
//  Created by 류연수 on 2020/12/12.
//

import Foundation

extension Date {
    
    func convertToStringForWeb(dateFormat: String = "yyyy-MM-dd'T'HH:mm:ss.SSSZ") -> String {
        let dateFormatter = DateFormatter()
        dateFormatter.locale = Locale(identifier: "ko")
        dateFormatter.dateFormat = dateFormat
        return dateFormatter.string(from: self)
    }
}
