import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPushCheckedTrack, initCheckedTrack } from "../../reduxModules/checkedTrack";
import { permitEffect } from "../../reduxModules/allCheck";
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
  const { isAllChecked } = useSelector((state: RootState) => state.AllCheckedFlag);
  const checkedTracks = useSelector((state: RootState) => state.checkedTrack);

  const dispatch = useDispatch();
  const allCheckHandler = () => {
    if (isAllChecked) {
      dispatch(initCheckedTrack());
      dispatch(permitEffect({ isAllChecked: false }));
    } else {
      dispatch(allPushCheckedTrack(checkedTracks));
      dispatch(permitEffect({ isAllChecked: true }));
    }
  };

  return (
    <StyledPlaylistCheckBar>
      <StyledInfoSection>
        <StyledInfoSectionLeft>
          <StyledInfoSectionCheckWrapper>
            <input type="checkbox" checked={isAllChecked} onClick={allCheckHandler} />
            전체선택
          </StyledInfoSectionCheckWrapper>
          <StyledInfoSectionCheckedNumber>
            {checkedTracks.length}곡 선택
          </StyledInfoSectionCheckedNumber>
        </StyledInfoSectionLeft>
        <StyledInfoSectionRight>{icons.x}</StyledInfoSectionRight>
      </StyledInfoSection>
      <StyledButtonSection>
        <StyledButtonSectionButtons>
          <StyledButtonSectionButton>
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
          <StyledButtonSectionPlayButton>
            <StyledIcons>{icons.play}</StyledIcons>재생
          </StyledButtonSectionPlayButton>
        </StyledButtonSectionPlayWrapper>
      </StyledButtonSection>
    </StyledPlaylistCheckBar>
  );
};

export default PlaylistCheckBar;
