import React from "react";
import styled from "styled-components";

export interface SlidebarProps {}

const StyledSlidebar = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
`;

const Img: React.FC<SlidebarProps> = ({}: SlidebarProps) => {
  return <StyledImg varient={varient} src={src} />;
};

export default Img;
