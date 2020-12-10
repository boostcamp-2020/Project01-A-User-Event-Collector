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
};
export default example1;
