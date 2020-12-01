import React from "react";
import styled from "styled-components";
import Img from "../Img";
import HoverCover from "./HoverCover";

export interface HoverImgProps {
  varient: string;
  src?: string;
}

const StyledHoverImg = styled.div`
  position: relative;
`;

const HoverImg: React.FC<HoverImgProps> = ({ varient, src }: HoverImgProps) => {
  return (
    <StyledHoverImg>
      <HoverCover varient={varient} />
      <Img varient={varient} src={src} />
    </StyledHoverImg>
  );
};

export default HoverImg;
