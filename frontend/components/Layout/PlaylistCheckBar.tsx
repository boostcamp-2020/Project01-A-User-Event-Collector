import React from "react";
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
  return (
    <StyledPlaylistCheckBar>
      <StyledInfoSection>
        <StyledInfoSectionLeft>
          <StyledInfoSectionCheckWrapper>
            <input type="checkbox" />
            전체선택
          </StyledInfoSectionCheckWrapper>
          <StyledInfoSectionCheckedNumber>2곡 선택</StyledInfoSectionCheckedNumber>
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
