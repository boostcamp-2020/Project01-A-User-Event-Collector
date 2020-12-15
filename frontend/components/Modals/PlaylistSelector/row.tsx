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
  box-sizing: border-box;
  padding: 0.25rem 0.75rem;
  &:hover {
    background-color: #ededed;
  }
`;

const StyledImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

const StyledPlaylistDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.25rem 0rem;
`;

const StyledPlaylistTitle = styled.div``;

const StyledNumOfTracks = styled.div`
  color: #777;
`;

interface Props {
  data: Playlist;
  tracks: Track[];
}

const ModalRow: FC<Props> = ({ data, tracks }: Props) => {
  const addTracksToPlaylist = () => {};

  return (
    <StyledTrackCard onClick={addTracksToPlaylist}>
      <StyledImg>
        <HoverImg varient="trackCardCover" src={data.cover} />
      </StyledImg>
      <StyledPlaylistDetails>
        <StyledPlaylistTitle>{data.playlistName}</StyledPlaylistTitle>
        <StyledNumOfTracks>{data.author}곡</StyledNumOfTracks>
      </StyledPlaylistDetails>
    </StyledTrackCard>
  );
};

export default ModalRow;
