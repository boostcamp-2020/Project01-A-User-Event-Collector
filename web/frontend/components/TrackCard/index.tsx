import React, { FC } from "react";
import styled from "styled-components";
import TrackModal from "./TrackModal";
import Link from "next/link";
import Img from "../Img";

interface Artist {
  id: number;
  artistName: string;
  cover: string;
}

interface Album {
  id: number;
  albumName: string;
  description?: string;
  cover: string;
  artistId: number;
}

interface Props {
  id: number;
  trackName: string;
  Albums: Album;
  Artists: Artist[];
}

interface Styles {}

const StyleTrack = styled.div<Styles>`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: white;
  }
`;

// album이랑 artist id 도 모두 내려보내줘야함.
const TrackCard: FC<Props> = ({ id, trackName, Albums, Artists }) => {
  const { albumName, id: albumId, cover } = Albums;

  const artistArr = Artists.map((elem: Artist) => {
    return { id: elem.id, artistName: elem.artistName };
  });

  return (
    <StyleTrack>
      <Img src={cover} varient="trackCardCover" />

      <span>{trackName}</span>
      <Link href={`/api/albums/${albumId}`}>
        <span>{albumName}</span>
      </Link>

      {artistArr.map((elem: any) => (
        <div>
          <Link href={`/api/artists/${elem.id}`}>
            <span>{elem.artistName}</span>
          </Link>
        </div>
      ))}

      <TrackModal trackId={id} />
    </StyleTrack>
  );
};

export default TrackCard;
export type { Props };
