import React, { FC } from "react";
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
import Heart from "../Button/HeartButton";
import { Artist } from "../../interfaces";

type detailPageTypes = "Albums" | "Playlists" | "Artists" | "Magazines" | "News";

interface Props {
  type: "Albums" | "Playlists" | "Artists" | "Magazines" | "News";
  id: number;
  title: string;
  cover: string;
  artists?: Artist[];
  description: string;
  playlistId?: number;
}
const DescriptionHeader: FC<Props> = ({
  type,
  id,
  title,
  cover,
  artists,
  description,
  playlistId,
}: Props) => {
  const makeHeartProps = (pageType: detailPageTypes) => {
    switch (pageType) {
      case "Magazines":
      case "News":
        return "Playlists";

      default:
        return pageType;
    }
  };

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
          <StyledPlaylistETCButton>
            <Heart type={makeHeartProps(type)} targetId={playlistId || id} />
          </StyledPlaylistETCButton>
        </StyledButtons>
      </StyledInfo>
    </StyledDescriptionHeader>
  );
};

export default DescriptionHeader;
