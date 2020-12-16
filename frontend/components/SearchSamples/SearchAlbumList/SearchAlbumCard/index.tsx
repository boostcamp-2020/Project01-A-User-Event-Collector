import React, { FC } from "react";
import Link from "next/link";
import { StyledAlbum, StyledCover, StyledAlbumName, StyledAlbumArtist } from "./styled";
import Img from "../../../Img";

interface Props {
  albumName: string;
  artistName: string;
  cover: string;
  id: number;
  artistId: number;
}

const SearchAlbumCard: FC<Props> = ({ albumName, artistName, cover, id, artistId }: Props) => {
  return (
    <StyledAlbum>
      <StyledCover>
        <Img varient="todaySmall" src={cover} />
      </StyledCover>
      <Link href={`/albums/${id}`}>
        <StyledAlbumName>{albumName}</StyledAlbumName>
      </Link>
      <Link href={`/artists/${artistId}`}>
        <StyledAlbumArtist>{artistName}</StyledAlbumArtist>
      </Link>
    </StyledAlbum>
  );
};

export default SearchAlbumCard;
