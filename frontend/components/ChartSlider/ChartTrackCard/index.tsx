import React, { FC } from "react";
import styled from "styled-components";
import { Album, Artist } from "../../../interfaces";
import HoverImg from "../../HoverImg";

interface Props {
  data: {
    id: number;
    trackName: string;
    Albums: Album;
    Artists: Artist[];
    rank: number;
  };
}

interface Styles {}

const StyleTrack = styled.li<Styles>`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: #eeeeee;
  }
`;

const ChildElem = styled.div`
  flex: 1;
`;

const SongArea = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ChartTrackCard: FC<Props> = ({ data }: Props) => {
  const { trackName, Albums, Artists, rank } = data;
  const { cover } = Albums;

  const artistArr = Artists.map((elem: Artist) => {
    return { id: elem.id, artistName: elem.artistName };
  });

  return (
    <StyleTrack>
      <HoverImg src={cover} varient="trackCardCover" />
      <ChildElem>
        <span>{rank}</span>
      </ChildElem>
      <SongArea>
        <span>{trackName}</span>
        <span>
          {artistArr.map((elem: any) => (
            <a href="">{` ${elem.artistName} `}</a>
          ))}
        </span>
      </SongArea>
    </StyleTrack>
  );
};

export default ChartTrackCard;
export type { Props };
