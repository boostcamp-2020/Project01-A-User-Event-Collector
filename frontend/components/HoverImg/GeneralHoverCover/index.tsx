import React, { useState } from "react";
import styled from "styled-components";
import Ellipsis from "../../Button/EllipsisButton";
import EllipsisModal from "../../Button/EllipsisButton/EllipsisModal";
import Heart from "../../Button/HeartButton";
import HoverPlayButton from "../../Button/HoverPlayButton";

interface StyledProps {
  hover?: boolean;
}

interface Props {
  hover?: boolean;
  heartType: "Tracks" | "Albums" | "Playlists" | "Artists";
  heartId: number;
}

const StyledHeart = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  border: 0px;
  position: absolute;
  right: 7.5%;
  bottom: 7.5%;
  font-size: 1.25rem;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const StyledGeneralHoverCover = styled.div<StyledProps>`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 1.75rem;
  left: 0rem;
  cursor: pointer;
  z-index: 200;
`;

const PlayButton = styled(HoverPlayButton)`
  position: absolute;
  outline: none;
  bottom: 10%;
  left: 10%;
`;

const GeneralHoverCover: React.FC<Props> = ({ hover, heartType, heartId }: Props) => {
  return (
    <>
      {hover && (
        <StyledGeneralHoverCover>
          <PlayButton />
          <StyledHeart>
            <Heart type={heartType} targetId={heartId} />
          </StyledHeart>
        </StyledGeneralHoverCover>
      )}
    </>
  );
};

export default GeneralHoverCover;
