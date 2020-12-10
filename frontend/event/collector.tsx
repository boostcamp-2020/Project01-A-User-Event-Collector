import React, { FC, useEffect, useRef } from "react";
import { SimpleEvent } from "./interface";

export interface EventObject {
  simple: { [identifier: string]: SimpleEvent };
}

export interface Props {
  children: React.ReactNode;
  eventConfig: EventObject;
}

const Collector: FC<Props> = ({ eventConfig, children }: Props) => {
  const { simple } = eventConfig;

  // config event
  const simpleEventArr = Object.values(simple);
  const eventTypeSet: Set<string> = new Set();
  const identifierSet: Set<string> = new Set();

  simpleEventArr.forEach((eventObject: SimpleEvent) => {
    eventTypeSet.add(eventObject.event_type);
    identifierSet.add(eventObject.className);
  });

  // event listener
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Array.from(eventTypeSet).forEach((ev: string) => {
      div?.current?.addEventListener(ev, (e: any) => {
        console.log(e);
      });
    });
  }, []);

  return <div ref={div}>{children}</div>;
};

export default Collector;
