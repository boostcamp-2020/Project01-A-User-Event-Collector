import React, { FC } from "react";

interface Props {
  children: any;
}

const DefaultCollector: FC<Props> = ({ children }: Props) => {
  console.log(children);
  const collector = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.type === "boostEvent") {
      alert("지정한 이벤트에용");
    }
  };
  // console.log(children);
  return <div onClick={collector}>{children}</div>;
};

const DefaultEmitter: FC<Props> = ({ children }: Props) => {
  const emitter = (event: React.MouseEvent<HTMLDivElement>) => {
    event.type = "boostEvent";
  };

  return <div onClick={emitter}>{children}</div>;
};

export { DefaultCollector, DefaultEmitter };
