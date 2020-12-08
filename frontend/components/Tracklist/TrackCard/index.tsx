import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";
import TrackModal from "./TrackModal";
import Img from "../../Img";
import { Album, Artist } from "../../../interfaces";
import CheckBox from "./CheckBox";

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
    background-color: red;
  }
`;

const ChildElem = styled.div`
  flex: 1;
`;

const TrackCard: FC<Props> = ({ id, trackName, Albums, Artists }: Props) => {
  const { albumName, id: albumId, cover } = Albums;

  const artistArr = Artists.map((elem: Artist) => {
    return { id: elem.id, artistName: elem.artistName };
  });

  return (
    <StyleTrack>
      <CheckBox trackData={{ id, trackName, Albums, Artists }} />
      <Img src={cover} varient="trackCardCover" />

      <ChildElem>
        <span>{trackName}</span>
      </ChildElem>
      <ChildElem>
        <Link href={`/albums/${albumId}`}>
          <span>{albumName}</span>
        </Link>
      </ChildElem>
      <ChildElem>
        {artistArr.map((elem: any) => (
          <Link key={elem.id} href={`/artists/${elem.id}`}>
            <span>{` ${elem.artistName} `}</span>
          </Link>
        ))}
      </ChildElem>

      <TrackModal trackId={id} />
    </StyleTrack>
  );
};

export default TrackCard;
export type { Props };
