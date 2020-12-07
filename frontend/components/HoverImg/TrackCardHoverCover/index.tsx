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
  background-color: #fff; // TODO: 색상 수정
  z-index: 1;
  display: ${(props) => (props.hover ? "block" : "none")};
  & svg {
    fill: #fff; // TODO: 색상 수정
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
