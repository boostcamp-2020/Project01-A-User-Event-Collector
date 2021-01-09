# **_Web Event Collector_**

- React 프로젝트라면, 어디서든 사용이 가능한 Event 수집기입니다.
- **_Config Object_** 를 작성하고,
이벤트 로깅을 원하는 컴포넌트를 **_Emitter_** 로 감싸고,
부모 컴포넌트 어딘가에서 **_Collector_** 로 감싸주면 됩니다.
- 간단한 *Native Event*에 사용자가 원하는 **의미**를 부여할 수 있고,
여러 event로 구성된 **복합 이벤트**에도 의미를 부여하여 로깅할 수 있습니다.

### 구성요소

**1. Event Config Object**

- 사용자가 원하는 Event들이 나열되어 있다.
- 조건이 충족되면, 사용자에게 주어질 Event 객체를 정의
- Event의 옵션을 정의
- 여러개의 Config Object가 존재 할 수 있다.
- 원하는 Collector에게 원하는 Config Object를 넘길 수 있다.

<br> 

**2. Collector**

- config object에서 정의된 이벤트들을 해석
- Emiiter로부터 전파되는 이벤트들을 감지 및 필터링
- 감지된 이벤트에 대해 dispatch로 전달
- _dispatch_: 사용자가 직접 정의할 수 있는 이벤트 핸들러.

<br>

**3. Emitter**

- 사용자가 정의한 Event가 발생하는 Wrapping Component
- Event가 Bubbling되기 전, Event 객체에 props와 Event ID를 삽입한다.
- Native Event가 아니라, 컴포넌트의 상태 값을 조건으로 Event를 발생시킬 수 있다.

<br>

**4. Dispatch**

- Collector의 인자로 넘겨야 하는 함수로 사용자가 직접 정의해야 합니다.
- 로깅되는 이벤트의 getter함수로 생각하면 됩니다.
- Collector는 사용자가 정의한 이벤트 발생 조건을 만족하면 dispatch를 호출합니다.
- 따라서, dispatch 함수는, 이벤트가 발생했을 때 처리하는 로직을 담고 있어야 합니다.

<br>

# **_Event Config Object_**

### **_Simple events_**

```typescript=
const example1: EventObject = {
  simple: {
    identifier_1: {
      event_id: 1,
      event_type: "click",
      description: "클릭 이벤트 발생",
    },
    identifier_2: {
      event_id: 2,
      event_type: "mouseover",
      description: "마우스 오버 이벤트 발생",
    },
  }
}
```

- **_Simple_** 에는 단일 Event를 정의합니다. `line [2]`
- **_DIVE_** (our event collector)는 "identifier_1"과 같이 **string**으로 event를 식별합니다. 따라서 identifier_1과 같이 객체의 key값은 Unique해야 됩니다. `line [3][9]`
- **_DIVE_** 는 사용자가 event_type에 입력한 event에 따라, event log를 내보냅니다.
  **_DIVE_** 는 Native Event를 대부분 지원합니다.`line [5][11]`
- 또한 `["click","mouseover"]`와 같이 입력을 한다면, **_Emitter_** 가 감싸는 컴포넌트에서 click, mouseover에 대해 DIVE가 Event log를 남깁니다.
- **_description_** 는 optional입니다.
  description을 입력한다면, event log에 description이 담길 것입니다.

<br>

### **_Complex events_**

```typescript=
import { EventObject } from "./collector";

const example1: EventObject = {
  simple: {
    identifier_1: {
      event_id: 1,
      event_type: ["click"],
      once: true,
      description: "클릭 이벤트 발생",
    },
    identifier_2: {
      event_id: 2,
      event_type: ["mouseover"],
      once: true,
      description: "마우스 오버 이벤트 발생",
    },
    identifier_3: {
      event_id: 4,
      event_type: ["click"],
      once: false,
      description: "다시 클릭 이벤트 발생",
    },
  },
  complex: {
    {
      timer: 3000,
      sequence: ["identifier_1", "identifier_2", "identifier_1"],
      event_id: 3,
      once: false,
      description: "상단의 3가지 이벤트가 모두 발생하면 해당 이벤트가 수집됩니다",
    },
  },
};
export default example1;

```

- **_complex_** 에는 복합 이벤트를 정의합니다.
- **_sequence_** 에는, simple에서 정의한 단일 이벤트의 식별자가 배열 형태로 들어갑니다.
- *sequence*에 나열한 이벤트들이, **_timer_** 에 작성한 ms가 끝날 때 까지 모두 발생한다면, 이벤트를 로깅합니다.
  **_여기선, 3초 안에, identifier1, identifier2, identifier1이 발생할 때, 이벤트를 로깅합니다._**

> Note:
> 이벤트의 로깅은 Collector에서 이뤄집니다.
> 이벤트 로깅이 발생하면, Collector는 사용자가 넘긴 dispatch함수를 호출합니다.
> 이벤트 객체를 dispatch 함수의 인자로 넘기면서,
> 사용자가 dispatch를 정의한대로 event를 사용할 수 있습니다.

<br>
<br>

# **_Collector & Emitter_**

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

- **_Collector_** 는 하나의 React Component로, 위 코드에서와 같이 원하는 컴포넌트 바깥쪽에 래핑합니다.
- 하나의 **_Collector_** 안쪽에 있는 여러 개의 **_Emitter_** 들로 부터 발생된 모든 이벤트는 모두 같은 Collector에서 수집됩니다.
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
  - eventType: 발생될 이벤트에 대한 정의가 들어가며, 문자열 또는 object 의 배열 형태로 입력받으며 여러 개를 입력할 수도 있습니다. 
    - eventType에 들어갈 Object 예시 :
    - ```javascript=
      {
        eventType: "click",
        restrictFire: {
          method: "throttle",
          time: 3,
      }
      ```
    - 별도 option들이 필요하지 않은 경우 string 형태로 eventType만 입력할 수도 있습니다.
- Emitter로 감싼 컴포넌트에서 eventType으로 지정한 이벤트가 발생된 경우, identifier, 브라우저의 nativeEvent정보, children의 props 등 몇가지 정보를 담은 객체를 부모 요소로 버블링합니다.
  - children이 반드시 single React element일 필요는 없지만 single React element가 아니라면 children props는 undefined로 버블링 될 것입니다.
- 이렇에 버블링 되는 이벤트는 Collector를 만날 때 까지 버블링되며, Collector를 만나면 config object 정보와, identifier, eventType을 비교하여 필터링되고, 수집 대상인 이벤트의 경우 dispatch에 전달됩니다.

<br>

### **_Dispatch_**

- **_Collector_** 의 **인자**로 넘겨지는 함수로, 사용자가 직접 정의해야 합니다.
- `dispatch={console.log}`와 같이 넘겨집니다.
  정의된 이벤트가 발생하면, **_Collector_** 는 바로 **_dispatch_** 를 호출합니다.
- *dispatch*에 넘겨지는 인자는 다음과 같습니다.
  ```javascript=
  dispatch({
    userEvent : {user가 config object에 정의한 객체},
    data : {Emitter가 래핑하고 있는 컴포넌트의 props},
    nativeEvent : {브라우저의 native 이벤트 객체}
  })
  ```
- **_data_** 를 통해, map을 통해 생성된 컴포넌트라도, 어느 요소를 클릭했는지 사용자가 dispatch 함수를 통해 판단할 수 있습니다.
- **_nativeEvent_** 와 **_userEvent_** 객체를 받아 사용자가 자유롭게 이용할 수 있게 했습니다.
