import React, { FC, useEffect, useRef } from "react";
import { SimpleEvent } from "./interface";

export interface EventObject {
  simple: { [identifier: string]: SimpleEvent };
}

export interface Props {
  children: React.ReactNode;
  eventConfig: EventObject;
  dispatch: Function;
}

const Collector: FC<Props> = ({ eventConfig, children, dispatch }: Props) => {
  const { simple } = eventConfig;
  console.log(simple);
  // config event
  const simpleEventArr = Object.values(simple);
  const simpleEventKeys = Object.keys(simple);
  const eventTypeSet: Set<string> = new Set();
  const identifierSet: Set<string> = new Set();

  simpleEventArr.forEach((eventObject: SimpleEvent) => {
    eventTypeSet.add(eventObject.event_type); // listen
  });
  simpleEventKeys.forEach((eventKey: string) => {
    identifierSet.add(eventKey); // filter
  });

  // event listener
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Array.from(eventTypeSet).forEach((ev: string) => {
      div?.current?.addEventListener(ev, (e: any) => {
        const eventKey = e.identifier;
        if (identifierSet.has(eventKey)) dispatch(simple[eventKey]);
      });
    });
  }, []);

  return <div ref={div}>{children}</div>;
};

export default Collector;
