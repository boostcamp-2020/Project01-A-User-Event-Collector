import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { concatenatePlayQueue } from "../../reduxModules/playQueue";
import { Track } from "../../interfaces";
import {
  emptyCheckedTrack,
  setAllChecked,
  toggleAllChecked,
} from "../../reduxModules/checkedTrack";
import { RootState } from "../../reduxModules";
import icons from "../../constant/icons";
import {
  StyledPlaylistCheckBar,
  StyledInfoSection,
  StyledInfoSectionLeft,
  StyledInfoSectionCheckWrapper,
  StyledInfoSectionCheckedNumber,
  StyledInfoSectionRight,
  StyledButtonSection,
  StyledButtonSectionButtons,
  StyledButtonSectionButton,
  StyledButtonSectionPlayWrapper,
  StyledButtonSectionPlayButton,
  StyledIcons,
} from "./PlaylistCheckBar.styled";

const PlaylistCheckBar = (): React.ReactElement => {
  const {
    allChecked,
    checkedTracks,
  }: { allChecked: boolean; checkedTracks: Set<Track> } = useSelector(
    (state: RootState) => state.checkedTracks,
  );
  const dispatch = useDispatch();
  const allCheckHandler = () => {
    dispatch(toggleAllChecked());
  };

  const concatePlaylist = () => {
    dispatch(concatenatePlayQueue(checkedTracks));
  };

  return (
    <StyledPlaylistCheckBar>
      <StyledInfoSection>
        <StyledInfoSectionLeft>
          <StyledInfoSectionCheckWrapper>
            <input type="checkbox" checked={allChecked} onClick={allCheckHandler} />
            전체선택
          </StyledInfoSectionCheckWrapper>
          <StyledInfoSectionCheckedNumber>
            {checkedTracks.size}곡 선택
          </StyledInfoSectionCheckedNumber>
        </StyledInfoSectionLeft>
        <StyledInfoSectionRight>{icons.x}</StyledInfoSectionRight>
      </StyledInfoSection>
      <StyledButtonSection>
        <StyledButtonSectionButtons>
          <StyledButtonSectionButton onClick={concatePlaylist}>
            <StyledIcons>{icons.arrowUp}</StyledIcons>바로 다음에
          </StyledButtonSectionButton>
          <StyledButtonSectionButton>
            <StyledIcons>{icons.arrowDown}</StyledIcons>맨 아래에
          </StyledButtonSectionButton>
          <StyledButtonSectionButton>
            <StyledIcons>{icons.music}</StyledIcons>추가
          </StyledButtonSectionButton>
          <StyledButtonSectionButton>
            <StyledIcons>{icons.headphones}</StyledIcons>구매
          </StyledButtonSectionButton>
        </StyledButtonSectionButtons>
        <StyledButtonSectionPlayWrapper>
          <StyledButtonSectionPlayButton onClick={concatePlaylist}>
            <StyledIcons>{icons.play}</StyledIcons>재생
          </StyledButtonSectionPlayButton>
        </StyledButtonSectionPlayWrapper>
      </StyledButtonSection>
    </StyledPlaylistCheckBar>
  );
};

export default PlaylistCheckBar;
