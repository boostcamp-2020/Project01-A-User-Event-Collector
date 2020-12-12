import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Track } from "../../interfaces";
import Img from "../Img";
import icons from "../../constant/icons";
import { RootState } from "../../reduxModules";
import {
  StyledPlaybar,
  StyledTrackSection,
  StyledImgSection,
  StyledTrackInfo,
  StyledTrackTitle,
  StyledTrackArtists,
  StyledEmptyHeart,
  StyledFilledHeart,
  StyledEllipsis,
  StyledMainControlSection,
  StyledSideControlSection,
  StyledTrackTime,
  StyledTrackVolume,
  StyledTrackVolumeSlide,
  StyledPlaylistButtonWrapper,
  StyledPlaylistButton,
  StyledMainButtons,
  StyledSideButtons,
  StyledMiddleButtons,
  StyledPlayButtons,
} from "./styled";

const Playbar = memo(
  ({
    handleShowPlaylist,
    showPlaylist,
  }: {
    handleShowPlaylist: () => void;
    showPlaylist: boolean;
  }) => {
    const playList: Track[] = useSelector((state: RootState) => state.playQueue);
    const dispatch = useDispatch();
    const {
      id: trackId,
      trackName,
      Albums: { cover, id: albumId },
      Artists,
    } = playList[0]
      ? playList[0]
      : { id: 0, trackName: "", Albums: { cover: "", id: 0 }, Artists: [{ artistName: "" }] };
    const artists: string[] = [];
    Artists.forEach((el) => {
      artists.push(el.artistName);
    });
    const liked = true;
    const fullPlayTime = "3:32";
    const currentPlayTime = "1:32";

    const data = useSelector((state: RootState) => state.playQueue);

    return (
      <StyledPlaybar onClick={handleShowPlaylist}>
        <StyledTrackSection>
          <StyledImgSection>
            <Img varient="nowPlayingCover" src={cover} />
          </StyledImgSection>
          <StyledTrackInfo>
            <StyledTrackTitle>{trackName}</StyledTrackTitle>
            <StyledTrackArtists>{artists.join(", ")}</StyledTrackArtists>
          </StyledTrackInfo>
          {liked ? (
            <StyledFilledHeart>{icons.emptyHeart}</StyledFilledHeart>
          ) : (
            <StyledEmptyHeart>{icons.emptyHeart}</StyledEmptyHeart>
          )}
          <StyledEllipsis>{icons.ellipsis}</StyledEllipsis>
        </StyledTrackSection>
        <StyledMainControlSection>
          <StyledMainButtons>
            <StyledSideButtons>{icons.random}</StyledSideButtons>
            <StyledMiddleButtons>{icons.previous}</StyledMiddleButtons>
            <StyledPlayButtons>{icons.play}</StyledPlayButtons>
            <StyledMiddleButtons>{icons.next}</StyledMiddleButtons>
            <StyledSideButtons>{icons.repeat}</StyledSideButtons>
          </StyledMainButtons>
        </StyledMainControlSection>
        <StyledSideControlSection>
          <StyledTrackTime>
            {currentPlayTime} / {fullPlayTime}
          </StyledTrackTime>
          <StyledTrackVolume>
            <StyledTrackVolumeSlide type="range" />
          </StyledTrackVolume>
          <StyledPlaylistButtonWrapper>
            <StyledPlaylistButton showPlaylist={showPlaylist}>{icons.list}</StyledPlaylistButton>
          </StyledPlaylistButtonWrapper>
        </StyledSideControlSection>
      </StyledPlaybar>
    );
  },
);

export default Playbar;
