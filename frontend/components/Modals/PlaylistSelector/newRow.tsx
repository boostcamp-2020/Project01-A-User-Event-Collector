/* eslint-disable no-unused-expressions */
import React, { FC } from "react";
import styled from "styled-components";
import HoverImg from "../../HoverImg";
import { Playlist, Track } from "../../../interfaces";

const StyledTrackCard = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  width: 100%;
  padding: 0.4rem 0rem;
  &:hover {
    background-color: #ededed;
  }
`;
const StyledImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaylistDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const PlaylistTitle = styled.div``;
const NumOfTracks = styled.div`
  color: #777777;
`;

const ModalNewRow: FC = () => {
  return (
    <StyledTrackCard>
      <StyledImg>
        <HoverImg varient="trackCardCover" src="" />
      </StyledImg>
      <PlaylistDetails>
        <PlaylistTitle>새 플레이리스트</PlaylistTitle>
      </PlaylistDetails>
    </StyledTrackCard>
  );
};

export default ModalNewRow;
