import React, { FC } from "react";
import SearchArtistCard from "./SearchArtistCard";
import StyledArtistList from "./styled";

interface Artist {
  artistName: string;
  cover: string;
  id: number; // artistId
  description: string;
}

interface Props {
  data: Artist[];
}

const SearchArtistList: FC<Props> = ({ data }: Props) => {
  return (
    <StyledArtistList>
      {data.map((artist) => {
        const { artistName, cover, id } = artist;
        return <SearchArtistCard key={id} artistName={artistName} cover={cover} id={id} />;
      })}
    </StyledArtistList>
  );
};

export default SearchArtistList;
