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
`;
const PlaylistTitle = styled.div``;
const NumOfTracks = styled.div`
  color: #777777;
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
      <PlaylistDetails>
        <PlaylistTitle>{data.playlistName}</PlaylistTitle>
        <NumOfTracks>{data.author}</NumOfTracks>
      </PlaylistDetails>
    </StyledTrackCard>
  );
};

export default ModalRow;
