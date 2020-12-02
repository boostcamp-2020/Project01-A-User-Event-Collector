import React from "react";
import styled from "styled-components";
import HoverEllipsisButton from "../../Button/HoverEllipsisButton";
import HoverPlayButton from "../../Button/HoverPlayButton";

interface Props {
  hover?: boolean;
}

export const StyledGeneralHoverCover = styled.div<Props>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  cursor: pointer;
  background-color: #00000099;
  z-index: 5;
  display: ${(props) => (props.hover ? "block" : "none")};
  & svg {
    background-color: transparent;
  }
`;

const EllipsisButton = styled(HoverEllipsisButton)`
  position: absolute;
  bottom: 10%;
  right: 10%;
`;
const PlayButton = styled(HoverPlayButton)`
  position: absolute;
  bottom: 10%;
  left: 10%;
`;

const GeneralHoverCover: React.FC<Props> = ({ hover }) => {
  return (
    <StyledGeneralHoverCover hover={hover}>
      <PlayButton />
      <EllipsisButton />
    </StyledGeneralHoverCover>
  );
};

export default GeneralHoverCover;
