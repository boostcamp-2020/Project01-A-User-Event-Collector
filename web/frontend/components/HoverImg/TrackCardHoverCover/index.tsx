import React from "react";
import styled from "styled-components";
import { PlaySvg } from "../../../utils/svg";

interface Props {
  hover?: boolean;
}

export const StyledTrackCardHoverCover = styled.div<Props>`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #00000099;
  z-index: 5;
  display: ${(props) => (props.hover ? "block" : "none")};
  & svg {
    fill: #ffffff99;
    background-color: transparent;
    width: 60%;
    height: 60%;
    margin: 20%;
  }
`;

const TrackCardHoverCover: React.FC<Props> = ({ hover }: Props) => {
  return (
    <StyledTrackCardHoverCover hover={hover}>
      <PlaySvg />
    </StyledTrackCardHoverCover>
  );
};

export default TrackCardHoverCover;
