import React from "react";
import styled from "styled-components";

export interface HoverCoverProps {
  varient: string;
}

export const StyledHoverCover = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;

const HoverCover: React.FC<HoverCoverProps> = ({ varient }: HoverCoverProps) => {
  return <StyledHoverCover>{}</StyledHoverCover>;
};

export default HoverCover;
