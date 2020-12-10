import React, { FC, useEffect, useRef } from "react";

type EventType = "click" | "mouseover";

export interface SingleEvent {
  className: string;
  event_id: number;
  event_name: string;
  event_type: EventType;
  once?: boolean;
  description?: string;
}

export interface EventObject {
  single: SingleEvent[];
}

export interface Props {
  children: any;
  eventConfig: EventObject;
}

const Collector: FC<Props> = ({ eventConfig, children }: Props) => {
  const { single } = eventConfig;

  // config event
  const typeArray: Set<string> = new Set();
  const identifierArr: Set<string> = new Set();

  single.forEach((eventObject: SingleEvent) => {
    identifierArr.add(eventObject.className);
    typeArray.add(eventObject.event_type);
  });

  // event listener
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Array.from(typeArray).forEach((ev: string) => {
      div?.current?.addEventListener(ev, (e: Event) => {
        const classList = Object.values(e.target?.classList);

        // filtering
        classList.forEach((value) => {
          if (!identifierArr.has(value)) {
          }
        });
      });
    });
  }, []);

  return <div ref={div}>{children}</div>;
};

export default Collector;
