import * as React from "react";
import { SimpleEvent, EventObject, EventType, ComplexEvent } from "./interface";
import SequencedEventObserver from "./SequencedEventObserver";

export interface Props {
  children: React.ReactNode;
  eventConfig: EventObject;
  dispatch: Function;
}

const Collector: React.FC<Props> = ({ eventConfig, children, dispatch }: Props) => {
  const simple = eventConfig.simple || {};
  const complex = eventConfig.complex || {};

  // config event
  const simpleEventArr: SimpleEvent[] = [];
  const simpleEventKeys = Object.keys(simple);
  simpleEventKeys.forEach((key) => {
    simpleEventArr.push(simple[key]);
  });

  const eventTypeSet: Set<EventType> = new Set();
  const identifierSet: Set<string> = new Set();

  simpleEventArr.forEach((simpleEventObject: SimpleEvent) => {
    simpleEventObject.event_type.forEach((element) => {
      eventTypeSet.add(element); // listen
    });
  });
  simpleEventKeys.forEach((eventKey: string) => {
    identifierSet.add(eventKey); // filter
  });

  // Complex Event
  const complexEventArr: ComplexEvent[] = [];
  const complexEventKeys = Object.keys(complex);
  complexEventKeys.forEach((key) => {
    complexEventArr.push(complex[key]);
  });

  const complexInstanceArr = complexEventArr.map((complexInstance) => {
    return new SequencedEventObserver(complexInstance, dispatch);
  });

  // event listener
  const collectorElement = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    Array.from(eventTypeSet).forEach((ev: EventType) => {
      collectorElement?.current?.addEventListener(ev, (e: any) => {
        const { identifier } = e;
        const bubbledEventType = e.type;
        if (identifierSet.has(identifier)) {
          if (!simple[identifier].event_type.includes(bubbledEventType)) {
            return;
          }
          dispatch({ userEvent: simple[identifier], props: e.children, nativeEvent: e });

          complexInstanceArr.forEach((complexInstance) => complexInstance.notify(identifier));
        }
        if (simple[identifier] && simple[identifier].stopPropagation === true) {
          e.stopPropagation();
        }
      });
    });
  }, []);

  return <div ref={collectorElement}>{children}</div>;
};

export default Collector;
