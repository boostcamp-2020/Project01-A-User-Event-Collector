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
  },
  complex: {
    identifier_3: {
      timer: 3000,
      sequence: ["identifier_1", "identifier_2"],
      event_id: 3,
      event_type: "compext test1",
      once: false,
      description: "complex event 테스트 임둥",
    },
  },
};
export default example1;
