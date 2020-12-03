import React from "react";
import HoverImg from "../HoverImg";
import { SmallA, SmallSpan, StyledCard, TitleA } from "./index.style";

interface cardData {
  src?: string;
  title?: string;
  smallText?: string;
  mainLink?: string;
  smallLink?: string;
}

export interface CardProps {
  varient?: string;
  dataType?: string;
  rawData?: any;
}

function convertData(dataType?: string, rawData?: any): cardData {
  switch (dataType) {
    case "magazine":
      return {
        title: rawData.magazineName,
        smallText: rawData.createdAt,
        src: rawData.cover,
        mainLink: `/playlist/${rawData.playlistId}`,
      };
    case "playlist":
      return {
        title: rawData.playlistName,
        smallText: `${rawData.author}`,
        src: rawData.cover,
        mainLink: `/playlist/${rawData.id}`,
      };
    case "album":
      return {
        src: rawData.cover,
        title: rawData.albumName,
        smallText: rawData.artistId,
        mainLink: `/album/${rawData.id}`,
        smallLink: `/artist/${rawData.artistId}`,
      };
    case "track":
      return {
        src: rawData.Albums.cover,
        title: rawData.trackName,
        smallText: rawData.Artists.artistName,
        mainLink: `/album/${rawData.Albums.id}`,
        smallLink: `/artist/${rawData.Artists.id}`,
      };
    case "news":
      return {
        src: rawData.cover,
        title: rawData.newsName,
        smallText: "관련 뉴스 보기",
        mainLink: `/playlist/${rawData.id}`,
        smallLink: rawData.newLink,
      };
    default:
      return {};
  }
}

const Card: React.FC<CardProps> = ({ varient, dataType, rawData }: CardProps) => {
  const { src, title, smallText, mainLink, smallLink } = convertData(dataType, rawData);
  return (
    <StyledCard varient={varient}>
      <HoverImg varient={varient} src={src} />
      <TitleA href={mainLink}>{title}</TitleA>
      {smallLink ? (
        <SmallA href={smallLink}>{smallText}</SmallA>
      ) : (
        <SmallSpan>{smallText}</SmallSpan>
      )}
    </StyledCard>
  );
};

export default Card;
