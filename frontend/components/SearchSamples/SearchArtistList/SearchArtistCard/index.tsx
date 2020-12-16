import React, { FC } from "react";
import Link from "next/link";
import { StyledArtist, StyledCover, StyledArtistName } from "./styled";
import Img from "../../../Img";

interface Props {
  artistName: string;
  cover: string;
  id: number; // artistId
}

const SearchArtistCard: FC<Props> = ({ artistName, cover, id }: Props) => {
  return (
    <StyledArtist>
      <StyledCover>
        <Img varient="likedArtist" src={cover} />
      </StyledCover>
      <Link href={`/artists/${id}`}>
        <StyledArtistName>{artistName}</StyledArtistName>
      </Link>
    </StyledArtist>
  );
};

export default SearchArtistCard;
