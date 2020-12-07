import React from "react";
import styled from "styled-components";
import { EllipsisSvg } from "../../../utils/svg";

export const StyledEllipsisButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  fill: white;
  position: absolute;
  border: none;
  outline: none;
  right: 10%;
  bottom: 10%;
  cursor: pointer;
`;

const HoverEllipsisButton: React.FC = () => {
  return (
    <StyledEllipsisButton>
      <EllipsisSvg />
    </StyledEllipsisButton>
  );
};

export default HoverEllipsisButton;
