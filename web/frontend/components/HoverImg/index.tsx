import React, { useState } from "react";
import Img from "../Img";
import GeneralHoverCover from "./GeneralHoverCover";
import { StyledHoverImg } from "./img.style";
import TrackCardHoverCover from "./TrackCardHoverCover";

export interface HoverImgProps {
  varient?: string;
  src?: string;
}

export const getChildren = (hover: boolean, varient?: string): JSX.Element | null => {
  switch (varient) {
    case "todayBig":
    case "todaySmall":
    case "todayNews":
      return <GeneralHoverCover hover={hover} />;
    case "trackCardCover":
      return <TrackCardHoverCover hover={hover} />;
    default:
      return null;
  }
};

const HoverImg: React.FC<HoverImgProps> = ({ varient, src }: HoverImgProps) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onHoverOut = () => {
    setHover(false);
  };

  return (
    <StyledHoverImg varient={varient} onMouseOver={onHover} onMouseOut={onHoverOut}>
      <Img varient={varient} src={src} />
      {getChildren(hover, varient)}
    </StyledHoverImg>
  );
};

export default HoverImg;
