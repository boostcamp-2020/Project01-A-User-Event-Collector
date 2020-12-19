import React from "react";
import styled from "styled-components";
import { PlaySvg } from "../../../utils/svg";

interface StyleProps {
  hover?: boolean;
}

interface Props {
  hover?: boolean;
}

export const StyledTrackCardHoverCover = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  display: ${(props) => (props.hover ? "block" : "none")};
`;

const TrackCardHoverCover: React.FC<Props> = ({ hover }: Props) => {
  return (
    <StyledTrackCardHoverCover hover={hover}>
      <PlaySvg />
    </StyledTrackCardHoverCover>
  );
};

export default TrackCardHoverCover;
