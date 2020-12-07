import React, { memo } from "react";
import icons from "../../constant/icons";
import {
  StyledPlaybar,
  StyledSongSection,
  StyledMainControlSection,
  StyledSideControlSection,
  StyledTrackTime,
  StyledTrackVolume,
  StyledPlaylistButton,
  StyledMainButtons,
  StyledSideButtons,
  StyledMiddleButtons,
  StyledPlayButtons,
} from "./styled";

const Playbar = memo(() => {
  return (
    <StyledPlaybar>
      <StyledSongSection>노래</StyledSongSection>
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
        <StyledTrackTime>01:02/03:42</StyledTrackTime>
        <StyledTrackVolume>불륨</StyledTrackVolume>
        <StyledPlaylistButton>블륨</StyledPlaylistButton>
      </StyledSideControlSection>
    </StyledPlaybar>
  );
});

export default Playbar;
