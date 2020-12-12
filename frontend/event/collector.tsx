import React, { FC, useEffect, useRef } from "react";
import { SimpleEvent, ComplexEvent } from "./interface";

export interface EventObject {
  simple: { [identifier: string]: SimpleEvent };
  complex: { [identifier: string]: ComplexEvent };
}

export interface Props {
  children: React.ReactNode;
  eventConfig: EventObject;
  dispatch: Function;
}

const Collector: FC<Props> = ({ eventConfig, children, dispatch }: Props) => {
  const { simple, complex } = eventConfig;

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

  // Complex Event
  const complexEventArr = Object.values(complex);
  const complexEventKeys = Object.keys(complex);
  const complexIdSet: Set<string> = new Set();

  const originSequence = complexEventArr.map((value) => value.sequence);
  const processQueue = complexEventArr.map((value) => value.sequence);
  const timers = complexEventArr.map((value) => value.timer);

  // event listener
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Array.from(eventTypeSet).forEach((ev: string) => {
      div?.current?.addEventListener(ev, (e: any) => {
        const eventKey = e.identifier;
        if (identifierSet.has(eventKey)) dispatch(simple[eventKey]);

        // Complex
      });
    });
  }, []);

  return <div ref={div}>{children}</div>;
};

export default Collector;
