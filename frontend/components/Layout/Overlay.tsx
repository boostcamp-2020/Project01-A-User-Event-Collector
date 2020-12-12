import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePlayQueue } from "../../reduxModules/playQueue";
import { Track } from "../../interfaces";
import { RootState } from "../../reduxModules";
import {
  StyledOverlay,
  StyledOverlayImg,
  StyledOverlayBar,
  StyledOverlayControl,
  StyledControlText,
  StyledButtons,
  StyledButton,
  StyledTrackLists,
  StyledTrackCard,
  StyledTrackCardCover,
  StyledTrackCardInfo,
  StyledTrackCardTitle,
  StyledTrackCardArtists,
  StyledTrackDeleteButton,
} from "./styled";
import icons from "../../constant/icons";
import Img from "../Img";

const TrackCard = ({ track }: { track: Track }): React.ReactElement => {
  const dispatch = useDispatch();

  const {
    id,
    trackName,
    Artists,
    Albums: { cover, albumName },
  } = track;
  const artists: string[] = [];
  Artists.forEach((el) => artists.push(el.artistName));

  const handleRemove = () => {
    dispatch(removePlayQueue(track));
  };

  return (
    <StyledTrackCard>
      <StyledTrackCardCover>
        <Img varient="trackCardCover" src={cover} />
      </StyledTrackCardCover>
      <StyledTrackCardInfo>
        <StyledTrackCardTitle>{trackName}</StyledTrackCardTitle>
        <StyledTrackCardArtists>{artists.join(", ")}</StyledTrackCardArtists>
      </StyledTrackCardInfo>
      <StyledTrackDeleteButton onClick={handleRemove}>{icons.x}</StyledTrackDeleteButton>
    </StyledTrackCard>
  );
};

const Overlay = (): React.ReactElement => {
  const playList: Track[] = useSelector((state: RootState) => state.playQueue);
  const dispatch = useDispatch();
  const emptyTrack: Track = {
    id: 0,
    albumTrackNumber: 0,
    trackName: "",
    albumId: 0,
    Albums: { cover: "", id: 0, artistId: 0, albumName: "" },
    Artists: [{ artistName: "", id: 0, cover: "" }],
    Users_Like_Tracks: [],
  };
  const {
    id: trackId,
    Albums: { cover, id: albumId },
  } = playList[0] ? playList[0] : emptyTrack;

  return (
    <StyledOverlay>
      <StyledOverlayImg>
        <img src={cover} alt="alt" />
      </StyledOverlayImg>
      <StyledOverlayBar>
        <StyledOverlayControl>
          <>
            <StyledControlText>이어지는 노래</StyledControlText>
          </>
          <StyledButtons>
            <StyledButton>{icons.random}</StyledButton>
            <StyledButton>{icons.repeat}</StyledButton>
          </StyledButtons>
        </StyledOverlayControl>
        <StyledTrackLists>
          {playList.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </StyledTrackLists>
      </StyledOverlayBar>
    </StyledOverlay>
  );
};

export default Overlay;
