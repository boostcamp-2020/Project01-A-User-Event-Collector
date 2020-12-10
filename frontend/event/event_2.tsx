import React, { FC, useEffect, useRef } from "react";
import * as eventConfig from "./event.config";

type eventType = "click" | "mouseover";

interface SingleEvent {
  identifier: string;
  event_id: number;
  event_name: string;
  event_type: eventType;
  once?: boolean;
  description?: string;
}

interface Event {
  single: SingleEvent[];
}

interface Props {
  children: any;
}

// ['click','mouseover'].forEach(function(ev) {
//     el.addEventListener(ev, function() {
//         console.log('event:', ev)
//     })
// })
const Collector: FC<Props> = ({ children }: Props) => {
  const { single } = eventConfig;

  const typeArray = new Set();
  const identifierArr = new Set();

  single.forEach((eventObject: SingleEvent) => {
    identifierArr.add(eventObject.identifier);
    typeArray.add(eventObject.event_type);
  });
  console.log(typeArray);
  console.log(identifierArr);
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ["click", "mouseover"].forEach((ev) => {
      div?.current?.addEventListener(ev, (e) => {
        console.log(`event: ${ev}, component: ${e.target.id}`);
      });
    });
  }, []);

  //   const test = () => {
  //     console.log(window.location.href);
  //     console.log(single);
  //   };

  return <div ref={div}>{children}</div>;
};

export default Collector;
// const collector = (e: React.MouseEvent<HTMLDivElement>) => {
//   e.stopPropagation();
//   if (e.type === "boostEvent") {
//     alert("지정한 이벤트에용");
//   }
// };
