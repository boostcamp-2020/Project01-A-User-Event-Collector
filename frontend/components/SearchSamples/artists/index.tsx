import React from "react";
import Link from "next/link";
import { StyledArtists, StyledArtist, StyledCover, StyledArtistName } from "./styled";
import Img from "../../Img";

interface ArtistCardProps {
  artistName: string;
  cover: string;
  id: number; // artistId
}

const SearchArtistCard = ({ artistName, cover, id }: ArtistCardProps) => {
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

interface Artist {
  artistName: string;
  cover: string;
  id: number; // artistId
  description: string;
}

const SearchArtistCards = ({ data }: { data: Artist[] }): React.ReactElement => {
  return (
    <StyledArtists>
      {" "}
      {data.map((artist) => {
        const { artistName, cover, id } = artist;
        return <SearchArtistCard key={id} artistName={artistName} cover={cover} id={id} />;
      })}
    </StyledArtists>
  );
};

export default SearchArtistCards;
