//
//  ErrorView.swift
//  MiniVibe
//
//  Created by 강병민 on 2020/12/01.
//

import SwiftUI

struct ErrorView: View {
//    let printer = DeallocPrinter(target: "ErrorView")
    
    init() {
//        print("ErrorView init")
    }
    var body: some View {
        Text("404 Not Found")
    }
}

struct ErrorView_Previews: PreviewProvider {
    static var previews: some View {
        ErrorView()
    }
}
