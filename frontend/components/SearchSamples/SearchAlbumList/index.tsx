import React, { FC } from "react";
import StyledAlbumList from "./styled";
import SearchAlbumCard from "./SearchAlbumCard";

interface Album {
  id: number;
  albumName: string;
  description: string;
  cover: string;
  artistId: number;
  Artists: {
    artistName: string;
  };
}

interface Props {
  data: Album[];
}

const SearchAlbumList: FC<Props> = ({ data }: Props) => {
  return (
    <StyledAlbumList>
      {data.map((album) => {
        const {
          albumName,
          cover,
          Artists: { artistName },
          id,
          artistId,
        } = album;
        return (
          <SearchAlbumCard
            key={id}
            albumName={albumName}
            cover={cover}
            artistName={artistName}
            id={id}
            artistId={artistId}
          />
        );
      })}
    </StyledAlbumList>
  );
};

export default SearchAlbumList;
