import React from "react";
import styled from "styled-components";
import icons from "../../../constant/icons";
import { PlaySvg } from "../../../utils/svg";

interface StyleProps {
  hover?: boolean;
}

interface Props {
  hover?: boolean;
}

const StyledTrackCardHoverCover = styled.div<StyleProps>`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0rem;
  left: 0rem;
  color: #fff;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.hover ? "block" : "none")};
`;

const StyledIcon = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TrackCardHoverCover: React.FC<Props> = ({ hover }: Props) => {
  return (
    <StyledTrackCardHoverCover hover={hover}>
      <StyledIcon>{icons.play}</StyledIcon>
    </StyledTrackCardHoverCover>
  );
};

export default TrackCardHoverCover;
