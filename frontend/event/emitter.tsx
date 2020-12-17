import React, { FC, useEffect, useRef, useState } from "react";
import { EventType } from "./interface";

interface RestrictOptions {
  method: "throttle" | "none";
  time: number;
}

type eventEmitterObj =
  | {
      eventType: EventType;
      restrictFire?: RestrictOptions;
      activateOn?: Function;
    }
  | EventType;

interface InitialOption {
  identifier: string;
  eventType: eventEmitterObj[];
}

interface Props extends InitialOption {
  children: any;
}

const Emitter: FC<Props> = ({ identifier, eventType, children }: Props) => {
  const div = useRef<HTMLDivElement>(null);

  useEffect(() => {
    eventType.forEach((eventObj: eventEmitterObj) => {
      let event: EventType;
      let restrictFire: RestrictOptions | undefined;
      if (typeof eventObj === "string") {
        event = eventObj;
      } else {
        event = eventObj.eventType;
        restrictFire = eventObj.restrictFire;
      }

      const eventListener = (e: any) => {
        e.identifier = identifier;
        e.children = children.props;
      };

      const throttledEventListener = (e: any) => {
        eventListener(e);
        div?.current?.removeEventListener(event, throttledEventListener);
        setTimeout(() => {
          div?.current?.addEventListener(event, throttledEventListener);
        }, restrictFire?.time);
      };

      if (restrictFire && restrictFire.method === "throttle") {
        div?.current?.addEventListener(event, throttledEventListener);
        return;
      }

      div?.current?.addEventListener(event, eventListener);
    });
  }, []);

  return (
    <div ref={div} id={identifier}>
      {children}
    </div>
  );
};

export default Emitter;
