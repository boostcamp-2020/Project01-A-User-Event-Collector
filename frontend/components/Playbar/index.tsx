import React, { memo } from "react";
import { useSelector } from "react-redux";
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

const Playbar = memo(() => {
  const trackImg =
    "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2528/image/gAQwYrfgzrdhkL4odG7BDoaIHu8";
  const trackname = "보자보자";
  const trackArtists = ["머쉬베놈"];
  const liked = true;
  const fullPlayTime = "3:32";
  const currentPlayTime = "1:32";

  const data = useSelector((state: RootState) => state.chekdTrack);

  return (
    <StyledPlaybar>
      {/* {console.log(data)} */}
      {data.map((elem) => (
        <h1 key={elem.id}>{elem.trackName}</h1>
      ))}
      <StyledTrackSection>
        <StyledImgSection>
          <Img varient="nowPlayingCover" src={trackImg} />
        </StyledImgSection>
        <StyledTrackInfo>
          <StyledTrackTitle>{trackname}</StyledTrackTitle>
          <StyledTrackArtists>{trackArtists.join(", ")}</StyledTrackArtists>
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
          <StyledPlaylistButton>{icons.list}</StyledPlaylistButton>
        </StyledPlaylistButtonWrapper>
      </StyledSideControlSection>
    </StyledPlaybar>
  );
});

export default Playbar;
