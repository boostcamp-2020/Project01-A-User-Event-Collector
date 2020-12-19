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
  display: flex;
  height: 4rem;
  justify-content: start;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: #eeeeee;
  }
  &:nth-child(n) {
    border-top: 0.1rem solid rgba(0, 0, 0, 0.05);
  }
  &:nth-child(n):nth-child(5n + 1) {
    border-top: 0rem;
  }
`;

const StyledRank = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  justify-content: end;
  align-items: start;
`;

const StyledRankNumber = styled.div`
  margin: 0.85rem 1rem 0rem 1rem;
  font-size: 1rem;
  width: auto;
`;

const StyledTrackInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
`;

const StyledTrackName = styled.div`
  display: flex;
  justify-content: start;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const StyledTrackArtist = styled.div`
  display: flex;
  justify-content: start;
  font-size: 0.75rem;
  color: #acacac;
`;

const ChartTrackCard: FC<Props> = ({ data }: Props) => {
  const { trackName, Albums, Artists, rank } = data;
  const { cover } = Albums;

  const artistArr = Artists.map((elem: Artist) => {
    return { id: elem.id, artistName: elem.artistName };
  });

  return (
    <StyleTrack>
      <HoverImg src={cover} varient="trackCardCover" heartType="Tracks" heartId={-1} />
      <StyledRank>
        <StyledRankNumber>{rank}</StyledRankNumber>
      </StyledRank>
      <StyledTrackInfo>
        <StyledTrackName>{trackName}</StyledTrackName>
        <StyledTrackArtist>
          {artistArr.map((elem: any) => (
            <a href="">{` ${elem.artistName} `}</a>
          ))}
        </StyledTrackArtist>
      </StyledTrackInfo>
    </StyleTrack>
  );
};

export default ChartTrackCard;
export type { Props };
