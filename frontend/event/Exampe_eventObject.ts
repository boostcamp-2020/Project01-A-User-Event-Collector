import { EventObject } from "./collector";

const example1: EventObject = {
  simple: {
    identifier_1: {
      event_id: 1,
      event_type: "click",
      once: true,
      description: "사용자가 지정한 컴포넌트에 Click 발생!!",
    },
    identifier_2: {
      event_id: 2,
      event_type: "mouseover",
      once: true,
      description: "사용자가 지정한 컴포넌트에 Mouseover 발생!!",
    },
    identifier_3: {
      event_id: 4,
      event_type: "click",
      once: false,
      description: "복합 이벤트가 발생했어요!!",
    },
  },
  complex: {
    identifier_3: {
      timer: 3000,
      sequence: ["identifier_1", "identifier_2", "identifier_1"],
      event_id: 3,
      event_type: "complex event 1",
      once: false,
      description: "이 이벤트가 일어나면, ~~~한 의미가 있습니다.",
    },
  },
};
export default example1;
