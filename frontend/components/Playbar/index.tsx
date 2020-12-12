import React, { memo, MouseEvent } from "react";
import { useRouter } from "next/router";
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
  StyledTrackArtist,
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
    handleShowPlaylist: (e: MouseEvent) => void;
    showPlaylist: boolean;
  }) => {
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
      trackName,
      Albums: { cover, id: albumId },
      Artists,
    } = playList[0] ? playList[0] : emptyTrack;
    const liked = true;
    const fullPlayTime = "3:32";
    const currentPlayTime = "1:32";
    const router = useRouter();

    const pushToAlbum = (e: MouseEvent) => {
      e.stopPropagation();
      router.push(`/albums/${albumId}`);
    };

    const pushToArtist = (artistId: number) => (e: MouseEvent) => {
      e.stopPropagation();
      router.push(`/artists/${artistId}`);
    };

    const artists = () =>
      Artists.map((el, idx) => {
        if (idx === Artists.length - 1) {
          return (
            <>
              <StyledTrackArtist onClick={pushToArtist(el.id)}>{el.artistName}</StyledTrackArtist>
            </>
          );
        }
        return (
          <>
            <StyledTrackArtist onClick={pushToArtist(el.id)}>{el.artistName}</StyledTrackArtist>
            <span>, </span>
          </>
        );
      });

    return (
      <StyledPlaybar onClick={handleShowPlaylist}>
        <StyledTrackSection>
          <StyledImgSection onClick={pushToAlbum}>
            <Img varient="nowPlayingCover" src={cover} />
          </StyledImgSection>
          <StyledTrackInfo>
            <StyledTrackTitle>{trackName}</StyledTrackTitle>
            <StyledTrackArtists>{artists()}</StyledTrackArtists>
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
