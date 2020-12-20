import * as React from "react";
import { EventType } from "./interface";

interface RestrictOptions {
  method: "throttle" | "none";
  time: number;
}

type eventEmitterObj =
  | {
      eventType: EventType;
      restrictFire?: RestrictOptions;
    }
  | EventType;

interface Props {
  identifier: string;
  eventType: eventEmitterObj[];
  children: any;
}

const Emitter: React.FC<Props> = ({ identifier, eventType, children }: Props) => {
  const emitterElement = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
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
        emitterElement?.current?.removeEventListener(event, throttledEventListener);
        setTimeout(() => {
          emitterElement?.current?.addEventListener(event, throttledEventListener);
        }, restrictFire?.time);
      };

      if (restrictFire && restrictFire.method === "throttle") {
        emitterElement?.current?.addEventListener(event, throttledEventListener);
        return;
      }

      emitterElement?.current?.addEventListener(event, eventListener);
    });
  }, []);

  return (
    <div ref={emitterElement}>
      {children}
    </div>
  );
};

export default Emitter;
