import React, { useState } from "react";
import styled from "styled-components";
import Img from "../Img";
import GeneralHoverCover from "./GeneralHoverCover";
import { StyledHoverImg } from "./img.style";
import TrackCardHoverCover from "./TrackCardHoverCover";

export interface HoverImgProps {
  varient?: string;
  src?: string;
}

const HoverImg: React.FC<HoverImgProps> = ({ varient, src }: HoverImgProps) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onHoverOut = () => {
    setHover(false);
  };

  return (
    <StyledHoverImg varient={varient} onMouseEnter={onHover} onMouseLeave={onHoverOut}>
      <Img varient={varient} src={src} />
      {varient === "trackCardCover" ? (
        <TrackCardHoverCover hover={hover} />
      ) : (
        <GeneralHoverCover hover={hover} />
      )}
    </StyledHoverImg>
  );
};

export default HoverImg;
