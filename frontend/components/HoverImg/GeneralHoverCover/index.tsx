import React from "react";
import styled from "styled-components";
import HoverPlayButton from "../../Button/HoverPlayButton";

interface StyledProps {
  hover?: boolean;
}

interface Props {
  hover?: boolean;
}

export const StyledGeneralHoverCover = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  cursor: pointer;
  background-color: #00000055;
  z-index: 5;
  display: ${(props) => (props.hover ? "block" : "none")};
  & svg {
    background-color: transparent;
  }
`;

const PlayButton = styled(HoverPlayButton)`
  position: absolute;
  bottom: 10%;
  left: 10%;
`;

const GeneralHoverCover: React.FC<Props> = ({ hover }: Props) => {
  return (
    <StyledGeneralHoverCover hover={hover}>
      <PlayButton />
    </StyledGeneralHoverCover>
  );
};

export default GeneralHoverCover;
