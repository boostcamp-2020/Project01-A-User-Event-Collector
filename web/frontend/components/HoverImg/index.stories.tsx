import React, { useState } from "react";
import HoverImg, { getChildren } from ".";
import Img from "../Img";
import { StyledHoverImg } from "./img.style";

export default {
  title: "HoverImg",
  component: HoverImg,
};

export const GeneralHoverImg: React.FC = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onHoverOut = () => {
    setHover(false);
  };

  return (
    <StyledHoverImg varient="todayBig" onMouseOver={onHover} onMouseOut={onHoverOut}>
      <Img
        varient="todayBig"
        src="https://musicmeta-phinf.pstatic.net/album/005/094/5094136.jpg?type=r360Fll"
      />
      {getChildren(hover, "todayBig")}
    </StyledHoverImg>
  );
};

export const TrackCardHoverImg: React.FC = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onHoverOut = () => {
    setHover(false);
  };

  return (
    <StyledHoverImg varient="trackCardCover" onMouseOver={onHover} onMouseOut={onHoverOut}>
      <Img
        varient="trackCardCover"
        src="https://musicmeta-phinf.pstatic.net/album/005/094/5094136.jpg?type=r360Fll"
      />
      {getChildren(hover, "trackCardCover")}
    </StyledHoverImg>
  );
};
