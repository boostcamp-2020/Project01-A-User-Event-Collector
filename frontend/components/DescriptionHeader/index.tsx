import React from "react";
import Img from "../Img";
import icons from "../../constant/icons";
import {
  StyledDescriptionHeader,
  StyledCover,
  StyledInfo,
  StyledTitle,
  StyledArtists,
  StyledDescription,
  StyledButtons,
  StyledPlayAllButton,
  StyledRandomPlayButton,
  StyledMP3Button,
  StyledPlaylistETCButton,
  StyledIcons,
} from "./styled";

const DescriptionHeader = ({ title, cover, artists, description }: any): React.ReactElement => {
  return (
    <StyledDescriptionHeader>
      <StyledCover>
        <Img varient="descriptionCover" src={cover} />
      </StyledCover>
      <StyledInfo>
        <StyledTitle>{title}</StyledTitle>
        <StyledArtists>{artists}</StyledArtists>
        <StyledDescription>{description}</StyledDescription>
        <StyledButtons>
          <StyledPlayAllButton>
            <StyledIcons>{icons.play}</StyledIcons>전체재생
          </StyledPlayAllButton>
          <StyledRandomPlayButton>
            <StyledIcons>{icons.random}</StyledIcons>랜덤재생
          </StyledRandomPlayButton>
          <StyledMP3Button>MP3 구매</StyledMP3Button>
          <StyledPlaylistETCButton>{icons.plus}</StyledPlaylistETCButton>
          <StyledPlaylistETCButton>{icons.ellipsis}</StyledPlaylistETCButton>
        </StyledButtons>
      </StyledInfo>
    </StyledDescriptionHeader>
  );
};

export default DescriptionHeader;
