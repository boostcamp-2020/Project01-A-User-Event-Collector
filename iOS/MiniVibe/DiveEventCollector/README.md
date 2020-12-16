# DiveEventCollector

DiveEventCollector는 이벤트 수집을 돕기위해 만든 패키지 입니다

# 설치
Xcode 메뉴에서 File > Swift Packages > Add Package Dependency를 선택후

`https://github.com/mike123789-dev/DiveEventCollector` 를 입력합니다

# 구성요소

1. Event
    - analytics system이 제공하는 모든 **이벤트들**.
    - `Event` 프로토콜 채택
2. EventManager
    - 이벤트를 로깅하기 위한 최상단 API, 실제로 로깅을하지는 않고,
    - `AnalyticsEngine`을 이용하여 보냄.
3. EventEngine
    - 직접적으로 로깅 전송/저장을 담당.
    - `EventSendable`, `EventFetchable` 프로토콜 채택 

<br>

## Event

```swift
public protocol Event: Codable {
    var name: String { get }
    var createdAt: String? { get }
    var metadata: [String: String]? { get }
}

```
기본적으로 제공되는 이벤트
```swift
class BaseEvent: Event {
    var name: String
    var createdAt: String?
    var metadata: [String: String]?
    
    public init(name: String, createdAt: String?, metadata: [String: String]?) {
        self.name = name
        self.createdAt = createdAt
        self.metadata = metadata
    }
}
```

Event 프로토콜을 채택하는 Custom Event의 예시
```swift
struct ScreenEvent: Event {
    var name: String
    var metadata: [String: String]?
    
    private init(name: String, metadata: [String: String]? = nil) {
        self.name = name
        self.metadata = metadata
    }
    
    static let playerPushed = ScreenEvent(name: "playerPushed")

    static let playerPopped = ScreenEvent(name: "playerPopped")
    
}
```

## Event Engine
```swift
public protocol EventSendable: class {
    func send<T: Event>(_ event: T)
}

public protocol EventFetchable: class {
    func fetch() -> [BaseEvent]
}
public protocol EventSendableAndFetchable: EventSendable, EventFetchable {
}

```
기본적으로 제공되는 Engine
```swift
public final class MockServerEngine: EventSendable {
    public init() {
        
    }
    public func send<T: Event>(_ event: T) {
        print("MockServer - \(event.name)")
        event.metadata?.forEach { key, value in
            print("ㄴ \(key) : \(value)")
        }
    }
}
```
<br>

## 이벤트의 흐름
![](https://i.imgur.com/gHEZrYz.gif)


### 이벤트의 간편한 확장성

`AnalyticEvent이` protocol로 구현함으로써, 새로운 이벤트를 추가하는것은 매우 간편해집니다. 

![](https://i.imgur.com/fCncpdR.gif)

### 이벤트 type checking

`AnalyticEvent` protocol을 채택하는 custom type의 이벤트를 구현함으로써, 원하는 이벤트에 대한 자동완성 결과를 볼수 있습니다.

![](https://i.imgur.com/MSw2rnw.png)



### 엔진의 다양한 구현
`EventSendable`, `EventFetchable`protocol을 채택하는 엔진을 다양하게 구현할수 있습니다.
그리고 상황에 맞게 필요한 엔진을 갈아 끼우는것도 매우 쉽습니다.

![](https://i.imgur.com/s13yZNi.gif)

또한, EventManager는 다수의 엔진을 가질 수도 있습니다.
실제로 [저희 앱](https://github.com/boostcamp-2020/Project01-A-User-Event-Collector)에서는 back end server를 위한 `engine`과 core data를 위한 `engine` 두개를 구현하고 주입했습니다.


# 사용법

**SwiftUI App life cycle**

먼저 최상위 파일인 App에 `import DiveEventCollector` 후 EventManager를 만들어줍니다.

```swift
import DiveEventCollector

struct MiniVibeApp: App {
    
    let manager = EventManager(serverEngine: MockServerEngine(), backupEngine: nil, alertEngine: nil)


    var body: some Scene {
        WindowGroup {
            CustomTabView(manager: manager)
        }
    }
}

```

그리고 해당 manager를 inject 해줍니다.

```swift
struct CustomTabView: View {
        
    private let manager: EventManager

    init(manager: EventManager) {
        self.manager = manager
    }
'
'
'
```
마지막으로 로깅을 위해서는 manager를 불러서 해주면된다.

```swift
struct TodayView: View {
    private let manager: EventManager

    init(manager: EventManager) {
        self.manager = manager
    }

'
'
'
        .onAppear{
            manager.log(ScreenEvent.screenViewed(.today))
        }

```

이렇게 순수하게 로깅을 위한 코드는 

`manager.log(ScreenEvent.screenViewed(.today))` 한줄이 됩니다.



**UIKit AppDelegate life cycle**

> 자세한 사용법은 추가 예정입니다.


### 참여자
[강병민](https://github.com/mike123789-dev)
[류연수](https://github.com/yeonduing)
