import React from "react";
import styled from "styled-components";
import { PlaySvg } from "../../../utils/svg";

export const StyledPlayButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 50%;
  border: 0px;
  position: absolute;
  left: 10%;
  bottom: 10%;
  & svg {
    fill: pink;
  }
`;

const HoverPlayButton: React.FC = () => {
  return (
    <StyledPlayButton>
      <PlaySvg />
    </StyledPlayButton>
  );
};

export default HoverPlayButton;
