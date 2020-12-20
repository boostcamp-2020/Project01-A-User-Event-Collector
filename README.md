# **_Team DIVE introduction_**

![](https://i.imgur.com/zG4Nagk.png)
| J124 | J153 | J190 | S002 | S015 |
| ----- | ----- | ----- | ----- |----- |
| 유선규[(sunkest)](https://github.com/sunkest) | 이유택[(lcpnine)](https://github.com/lcpnine) | 조병건[(marulloc)](https://github.com/marulloc) | 강병민[(mike123789-dev)](https://github.com/mike123789-dev) | 류연수[(yeonduing)](https://github.com/yeonduing) |

[Link to Web Dev Logs](https://github.com/boostcamp-2020/Project01-A-User-Event-Collector#web-dev-logs)  
[Link to iOS Dev Logs](https://github.com/boostcamp-2020/Project01-A-User-Event-Collector#ios-dev-logs)

![](https://i.imgur.com/YrK0BDA.gif)

<br>
<br>
<br>
<br>

# **_Project introduction_**

다양한 프로젝트에서 독립적으로 적용 가능한 ***User Event Collecto*r** 제작

> **User Event ?** UI/UX 개선 등을 위해 수집하는 Event

<br>

### 우리의 이벤트 수집기 "**_DIVE_**"

프로젝트 마다 **_의미 있는 이벤트_**는 다를 것 입니다.
**_DIVE_**는 자유도 높게 설계되어, **_의미 있는 이벤트_**의 범주를 개발자가 정할 수 있습니다.

즉, 개발자가 원한다면, 기본적으로 제공되는 이벤트 뿐만 아니라
웹의 경우, 단일 이벤트 여러개로 이루어진 *복합 이벤트*를 수집하거나,
앱의 경우, 앱을 종료하거나 노래를 재생하는 이벤트들을 수집할 수 있습니다.

**_DIVE_**를 이용하여, 원하는 이벤트를 수집할 수 있으며,
수집한 데이터는 UI/UX 개선에 중요한 데이터가 될 것입니다.

 <br>
 
 ***DIVE***의 동작을 보이기 위하여, Naver 스트리밍 서비스 ***VIBE***를 ***Clone***하여 이벤트를 수집했습니다.
 Clone scope에서 VIBE의 추천 기능과 음원 재생 기능은 제외

[Link to Web DIVE ReadMe](https://github.com/boostcamp-2020/Project01-A-User-Event-Collector#web-event-collector)

[Link to iOS DIVE ReadMe](https://github.com/boostcamp-2020/Project01-A-User-Event-Collector#ios-event-collector)

<br>
<br>
<br>
<br>

# **_Technology Stack_**

![스크린샷(163)](https://user-images.githubusercontent.com/48251136/101978886-d8cf6500-3c9b-11eb-9be1-d74fd7761dcc.png)

<br>
<br>
<br>
<br>

# **_DIVE ReadME_**

## **_Web Event Collector_**

React 프로젝트라면, 어디서든 사용이 가능한 Event 수집기입니다.

**_Config Object_**를 작성하고,
이벤트 로깅을 원하는 컴포넌트를 **_Emitter_**로 감싸고,
부모 컴포넌트 어딘가에서 **_Collector_**로 감싸준다면 끝입니다.

간단한 *Native Event*에 사용자가 원하는 **의미**를 부여할 수 있으며,
여러 event로 구성된 **복합 이벤트**에도 의미를 부여하여 로깅할 수 있습니다.

<br>

### 구성요소

**1. Event Config Object**
&emsp; 사용자가 원하는 Event들이 나열되어 있다.
&emsp; 조건이 충족되면, 사용자에게 주어질 Event들을 정의
&emsp; Event의 옵션들을 정의
&emsp; 여러개의 Config Object가 존재 할 수 있다.
&emsp; 원하는 Collector에게 원하는 Config Object를 넘길 수 있다.

**2. Collector**
&emsp; config object에서 정의된 이벤트들을 해석
&emsp; Emiiter로부터 전파되는 이벤트들을 감지 및 필터링
&emsp; 감지된 이벤트에 대해 dispatch로 전달
&emsp; _dispatch_: 사용자가 직접 정의할 수 있는 이벤트 핸들러.

**3. Emitter**
&emsp; 사용자가 정의한 Event가 발생하는 Wrapping Component
&emsp; Event가 Bubbling되기 전, Event 객체에 props와 Event ID를 삽입한다.
&emsp; Native Event가 아니라, 컴포넌트의 상태 값을 조건으로 Event를 발생시킬 수 있다.

**4. Dispatch**
&emsp; Collector의 인자로 넘겨야 하는 함수로 사용자가 직접 정의해야 합니다.
&emsp; 로깅되는 이벤트의 getter함수로 생각하면 됩니다.
&emsp; Collector는 사용자가 정의한 이벤트 발생 조건을 만족하면 dispatch를 호출합니다.
&emsp; 따라서, dispatch 함수는, 이벤트가 발생했을 때 처리하는 로직을 담고 있어야 합니다.

<br>

## **_Event Config Object_**

### **_Simple events_**

```typescript=
const example1: EventObject = {
  simple: {
    identifier_1: {
      event_id: 1,
      event_type: "click",
      once: true,
      description: "너무 잼따",
    },
    identifier_2: {
      event_id: 2,
      event_type: "mouseover",
      once: true,
      description: "이건 두번째 식별자에요~",
    },
  }
}
```

- **_Simple_**에는 단일 Event를 정의합니다. `line [2]`
- **_DIVE_**(our event collector)는 "identifier_1"과 같이 **string**으로 event를 식별합니다. 따라서 identifier_1과 같이 객체의 key값은 Unique해야 됩니다. `line [3][9]`
- **_DIVE_**는 사용자가 event_type에 입력한 event에 따라, event log를 내보냅니다.
  **_DIVE_**는 Native Event를 대부분 지원합니다.`line [5][11]`
- 또한 `["click","mouseover"]`와 같이 입력을 한다면, **_Emitter_**가 감싸는 컴포넌트에서 click, mouseover에 대해 DIVE가 Event log를 남깁니다.
- **_description_**과 **_once_**는 optional입니다.
  description을 입력한다면, event log에 description이 담길 것입니다.
  `once:true`를 입력한다면, event log를 한번만 남기게 됩니다. default값은 false 입니다.

<br>

### **_Complex events_**

```typescript=
import { EventObject } from "./collector";

const example1: EventObject = {
  simple: {
    identifier_1: {
      event_id: 1,
      event_type: "click",
      once: true,
      description: "너무 잼따",
    },
    identifier_2: {
      event_id: 2,
      event_type: "mouseover",
      once: true,
      description: "이건 두번째 식별자에요~",
    },
    identifier_3: {
      event_id: 4,
      event_type: "click",
      once: false,
      description: "이게 바로 스트레스 테스트",
    },
  },
  complex: {
    {
      timer: 3000,
      sequence: ["identifier_1", "identifier_2", "identifier_1"],
      event_id: 3,
      event_type: "compext test1",
      once: false,
      description: "complex event 테스트 임둥",
    },
  },
};
export default example1;

```

- **_complex_**에는 복합 이벤트를 정의합니다.
- **_sequence_**에는, simple에서 정의한 단일 이벤트의 식별자가 배열 형태로 들어갑니다.
- *sequence*에 나열한 이벤트들이, **_timer_**에 작성한 ms가 끝날 때 까지 모두 발생한다면, 이벤트를 로깅합니다.
  **_여기선, 3초 안에, identifier1, identifier2, identifier1이 발생할 때, 이벤트를 로깅합니다._**

> Note:
> 이벤트의 로깅은 Collector에서 이뤄집니다.
> 이벤트 로깅이 발생하면, Collector는 사용자가 넘긴 dispatch함수를 호출합니다.
> 이벤트 객체를 dispatch 함수의 인자로 넘기면서,
> 사용자가 dispatch를 정의한대로 event를 사용할 수 있습니다.

<br>
<br>

## **_Collector & Emitter_**

### _Example Code_

```jsx=
const IndexPage = () => {
  return (
    <Collector eventConfig={example1} dispatch={(e) => {console.log(e)}}>
      <div>
        <Emitter identifier="testH1Event" eventType={["click"]}>
          <h1>Click Event Tester</h1>
        </Emitter>
        <div>Nothing Div</div>
        <Emitter identifier="testComponentEvent" eventType={["mouseover"]}>
          <TestComponent />
        </Emitter>
      </div>
    </Collector>
  );
};
```

### **_Collector_**

- **_Collector_**는 하나의 React Component로, 위 코드에서와 같이 원하는 컴포넌트 바깥쪽에 래핑합니다.
- 하나의 **_Collector_** 안쪽에 있는 여러 개의 **_Emitte_**r들로 부터 발생된 모든 이벤트는 모두 같은 Collector에서 수집됩니다.
- 하나의 Complex Event에 포함되는 Simple Event 들은 하나의 Collector안에 작성되어야 합니다.
- 주어지는 props는 다음과 같습니다.
  - eventConfig: 앞서 설명된 이벤트 정의 object
  - dispatch: 해당 Collector에서 이벤트 감지시 호출될 콜백 메서드. dispatch의 작성에 대해서는 후술됩니다.
    > Note:
    > Collector를 어떤 컴포넌트에 래핑할 것인지 정하는 것은 개발자의 몫입니다. 다만, 전역으로 사용하거나, 너무 큰 페이지와 같은 컴포넌트에 사용된다면 하나의 Collector에 버블링되는 이벤트가 과도하게 많아질 수 있습니다. 가능하다면, 적절히 Collector를 분리하는 것을 권장합니다.

<br>

### **_Emitter_**

- Emitter 또한 하나의 React Component로, 기본 이벤트 수집 대상 컴포넌트 바로 바깥쪽에 래핑합니다.
- 주어지는 props는 다음과 같습니다.
  - identifier: 이벤트가 발생할 컴포넌트를 구분할 식별자로, 문자열 형태입니다. config object에 정의한 식별자가 들어갑니다.
  - eventType: 이벤트의 종류로, 브라우저에서 지원되는 이벤트들이 들어가며, 그 종류는 아래와 같습니다. 문자열의 배열 형태로 입력받으며 여러 개를 입력할 수도 있습니다.
- Emitter로 감싼 컴포넌트에서 eventType으로 지정한 이벤트가 발생된 경우, identifier, 브라우저의 nativeEvent정보, props 등 몇가지 정보를 담은 객체를 부모 요소로 버블링합니다.
- 이렇에 버블링 되는 이벤트는 Collector를 만날 때 까지 버블링되며, Collector를 만나면 config object 정보와, identifier, eventType을 비교하여 필터링되고, 수집 대상인 이벤트의 경우 dispatch에 전달됩니다.

> Note:
> 컴포넌트의 상태 값을 event 발생 조건으로 삼기 위해,
> 금주 내로, Emitter에 boolean 형을 반환하는 함수를 받을 것입니다.
> boolean 형을 반환하는 함수는, 원하는 상태 값이 임계점(사용자가 지정한)을 넘어가면 true를 반환해야 합니다.
> Emitter는 이벤트가 발생할 때마다, 함수를 호출하고, 반환값이 true가 아니라면, stopPropagation()을 통해, 이벤트가 버블링되는 것을 막을 것입니다.
> 이벤트 버블링이 되지 않으므로, Collector에선 이벤트를 수집 할 수 없습니다.

<br>

### **_Dispatch_**

- **_Collector_**의 **인자**로 넘겨지는 함수로, 사용자가 직접 정의해야 합니다.
- `dispatch={console.log}`와 같이 넘겨집니다.
  정의된 이벤트가 발생하면, **_Collector_**는 바로 **_dispatch_**를 호출합니다.
- *dispatch*에 넘겨지는 인자는 다음과 같습니다.
  ```javascript=
  dispatch({
    userEvent : {user가 config object에 정의한 객체},
    data : {Emitter가 래핑하고 있는 컴포넌트의 props},
    nativeEvent : {브라우저의 native 이벤트 객체}
  })
  ```
- **_data_**를 통해, map을 통해 생성된 컴포넌트라도, 어느 요소를 클릭했는지 사용자가 dispatch 함수를 통해 판단할 수 있습니다.
- **_nativeEvent_**와 **_userEvent_** 객체를 받아 사용자가 자유롭게 이용할 수 있게 했습니다.

<br>
<br>

## **_iOS Event Collector_**

<br>

# 구성요소

1. Event
   - Event Collector에서 제공하는 모든 **이벤트**.
   - `Event` 프로토콜 채택
2. EventManager
   - 이벤트를 로깅하기 위한 최상단 API, 실제로 로깅을하지는 않고,
   - `EventEngine`을 이용하여 보냄.
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

`Event` protocol로 구현함으로써, 새로운 이벤트를 추가하는것은 매우 간편해집니다.

<img width="500" alt="New Model Version" src="https://i.imgur.com/fCncpdR.gif">

### 이벤트 type checking

`Event` protocol을 채택하는 custom type의 이벤트를 구현함으로써, 원하는 이벤트에 대한 자동완성 결과를 볼수 있습니다.

### 엔진의 다양한 구현

`EventSendable`, `EventFetchable`protocol을 채택하는 엔진을 다양하게 구현할수 있습니다.
그리고 상황에 맞게 필요한 엔진을 갈아 끼우는것도 매우 쉽습니다.

<img width="550" alt="New Model Version" src="https://i.imgur.com/s13yZNi.gif">

또한, EventManager는 다수의 엔진을 가질 수도 있습니다.
실제로 [저희 앱](https://github.com/boostcamp-2020/Project01-A-User-Event-Collector)에서는 back end server를 위한 `engine`과 core data를 위한 `engine` 두개를 구현하고 주입했습니다.

# 설치

어느 프로젝트에서도 사용 가능하도록 Swift package manager를 이용한 설치가 가능합니다.

1. Xcode 메뉴에서 File > Swift Packages > Add Package Dependency를 선택후
2. `https://github.com/mike123789-dev/DiveEventCollector` 를 입력합니다

# **_Web Dev Logs_**

| Web Dev Logs                                                                                                                                                                                                                                                                                                   | Author               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| [Next.js](https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/next-js-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC)                                                                                                                                                                               | 조병건               |
| [Sequelize 떠나보내기](<https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/Sequelize%EB%A5%BC-Sequelize-Typescript-CLI%EB%A1%9C-%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0-(%EC%8A%A4%ED%8F%AC:-%EC%8B%A4%ED%8C%A8)>)                                                                           | 이유택               |
| [Prisma 도입과 사용법](https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/Prisma-%EC%82%AC%EC%9A%A9%EA%B8%B0)                                                                                                                                                                             | 이유택               |
| [Vercel로 Next app 배포하기](https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/Vercel-%EB%B0%B0%ED%8F%AC%EA%B8%B0)                                                                                                                                                                       | 이유택               |
| [Jenkins로 CI 구현하기](https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/Jenkis-%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0)                                                                                                                                                                   | 조병건               |
| [Naver OAuth2.0 연동하기](https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/Naver-OAuth2.0-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0)                                                                                                                                                         | 유선규               |
| [우리만의 Storybook 활용법... <br> Spread Operator(...)로 props를 전달하는 것은 정말 anti-pattern인가? ](<https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/Storybook%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-Front-%EC%9E%91%EC%97%85-%EB%B0%A9%EC%8B%9D-(front-DEV-flow-with-Storybook)>) | 조병건,이유택,유선규 |

# **_iOS Dev Logs_**

| iOS Dev Logs                                                                                                                                                                                                                                                                                                                                                       | Author |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| [노래 track list를 만들어보자! (part1: SwiftUI를 이용하여 Cell 디자인하기)](<https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/%EB%85%B8%EB%9E%98-track-list%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90!-(part1:-SwiftUI%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-Cell-%EB%94%94%EC%9E%90%EC%9D%B8%ED%95%98%EA%B8%B0)>)     | 강병민 |
| [노래 track list를 만들어보자! (part2: List로 보여주기 및 ViewModel적용하기)](<https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/%EB%85%B8%EB%9E%98-track-list%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90!-(part2:-List%EB%A1%9C-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0-%EB%B0%8F-ViewModel%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)>) | 강병민 |
| [SwiftUI에서 View와 Model Binding (part1: @State와 @Binding)](<https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/SwiftUI%EC%97%90%EC%84%9C-View%EC%99%80-Model-Binding-(part1:-@State%EC%99%80-@Binding)>)                                                                                                                                   | 강병민 |
| [SwiftUI에서 View와 Model Binding (part2: @StateObject, @ObservedObject, @Published)](<https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/SwiftUI%EC%97%90%EC%84%9C-View%EC%99%80-Model-Binding-(part2:-@StateObject,-@ObservedObject,-@Published)>)                                                                                          | 강병민 |
| [SwiftUI에서 View와 Model Binding (part3: @EnvironmentObject)](<https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/SwiftUI%EC%97%90%EC%84%9C-View%EC%99%80-Model-Binding-(part3:-@EnvironmentObject)>)                                                                                                                                        | 강병민 |
| [Combine을 이용힌 chaining](<https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/Combine%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%9E%8C-chaining-(feat.-SearchView)>)                                                                                                                                                                                    | 강병민 |
| [Protocol 기반의 Analytics System을 만들어보자](https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/Protocol-%EA%B8%B0%EB%B0%98%EC%9D%98-Analytics-System%EC%9D%84-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EC%9E%90)                                                                                                                              | 강병민 |
| [SwiftUI) 사용자 이벤트 수집 및 Alert로 확인](https://yeonduing.tistory.com/50)                                                                                                                                                                                                                                                                                    | 류연수 |
| [서버로 post할 때 json 형식으로 보내기](https://yeonduing.tistory.com/49)                                                                                                                                                                                                                                                                                          | 류연수 |
| [코어데이터 마이그레이션](https://yeonduing.tistory.com/48)                                                                                                                                                                                                                                                                                                        | 류연수 |
| [CoreData로 오프라인에서도 이용 가능한 앱 만들기](https://github.com/boostcamp-2020/Project01-A-User-Event-Collector/wiki/CoreData%EB%A1%9C-%EC%98%A4%ED%94%84%EB%9D%BC%EC%9D%B8%EC%97%90%EC%84%9C%EB%8F%84-%EC%9D%B4%EC%9A%A9-%EA%B0%80%EB%8A%A5%ED%95%9C-%EC%95%B1-%EB%A7%8C%EB%93%A4%EA%B8%B0)                                                                  | 류연수 |
| [SwiftUI) NavigationLink와 Memory Leak](https://yeonduing.tistory.com/47)                                                                                                                                                                                                                                                                                          | 류연수 |
| [URL로 비동기 이미지 생성하기 - Combine과 Network](https://yeonduing.tistory.com/46)                                                                                                                                                                                                                                                                               | 류연수 |
| [SwiftUI) ViewBuilder 와 guard let](https://yeonduing.tistory.com/45)                                                                                                                                                                                                                                                                                              | 류연수 |
| [SwiftUI) ObservableObject와 상속](https://yeonduing.tistory.com/44)                                                                                                                                                                                                                                                                                               | 류연수 |
| [SwiftUI) MVVM과 Combine](https://yeonduing.tistory.com/41)                                                                                                                                                                                                                                                                                                        | 류연수 |
| [SwiftUI) 다이나믹 리스트](https://yeonduing.tistory.com/40)                                                                                                                                                                                                                                                                                                       | 류연수 |

<br>
<br>
