import React from "react";
import Link from "next/link";
import {
  StyledAlbums,
  StyledAlbum,
  StyledCover,
  StyledAlbumName,
  StyledAlbumArtist,
} from "./styled";
import Img from "../../Img";

interface AlbumCardProps {
  albumName: string;
  artistName: string;
  cover: string;
  id: number; // albumId
  artistId: number;
}

const SearchAlbumCard = ({ albumName, artistName, cover, id, artistId }: AlbumCardProps) => {
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

const SearchAlbumCards = ({ data }: { data: Album[] }): React.ReactElement => {
  return (
    <StyledAlbums>
      {" "}
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
    </StyledAlbums>
  );
};

export default SearchAlbumCards;
