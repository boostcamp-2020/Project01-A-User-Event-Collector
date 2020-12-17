import React from "react";
import styled from "styled-components";
import icons from "../../../constant/icons";

const StyledPlayButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  border: 0px;
  position: absolute;
  left: 7.5%;
  bottom: 7.5%;
  font-size: 1.25rem;
  color: #fe1250;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

const StyledText = styled.span`
  margin-left: 0.25rem;
`;

const HoverPlayButton: React.FC = () => {
  return (
    <StyledPlayButton>
      <StyledText>{icons.play}</StyledText>
    </StyledPlayButton>
  );
};

export default HoverPlayButton;
