import React, { FC, useEffect, useRef } from "react";
import { EventType } from "./interface";

interface InitialOption {
  identifier: string;
  eventType: EventType[];
}

interface Props extends InitialOption {
  children: any;
}

const Emitter: FC<Props> = ({ identifier, eventType, children }: Props) => {
  const div = useRef<HTMLDivElement>(null);

  useEffect(() => {
    eventType.forEach((event: EventType) => {
      div?.current?.addEventListener(event, (e: any) => {
        e.identifier = identifier;
        e.children = children.props;
      });
    });
  }, []);

  return (
    <div ref={div} id={identifier}>
      {children}
    </div>
  );
};

export default Emitter;
