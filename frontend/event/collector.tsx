import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { SimpleEvent, ComplexEvent } from "./interface";
import SequenceEvent from "./complexEvent";

export interface EventObject {
  simple: { [identifier: string]: SimpleEvent };
  complex: { [identifier: string]: ComplexEvent };
}

export interface Props {
  children: React.ReactNode;
  eventConfig: EventObject;
  dispatch: Function;
}

const StyledCollector = styled.div`
  position: relative;
`;

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
  const complexInstanceArr = complexEventArr.map((complexInstance) => {
    // eslint-disable-next-line no-new
    return new SequenceEvent(complexInstance, dispatch);
  });

  // event listener
  const div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Array.from(eventTypeSet).forEach((ev: string) => {
      div?.current?.addEventListener(ev, (e: any) => {
        const eventKey = e.identifier;

        if (identifierSet.has(eventKey)) {
          dispatch({ userEvent: simple[eventKey], props: e.children, nativeEvent: e });
          complexInstanceArr.forEach((complexInstance) => complexInstance.notify(eventKey));
        }
      });
    });
  }, []);

  return <StyledCollector ref={div}>{children}</StyledCollector>;
};

export default Collector;
