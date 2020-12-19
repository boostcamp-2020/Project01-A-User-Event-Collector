import Link from "next/link";
import Router from "next/router";
import React, { MouseEvent } from "react";
import HoverImg from "../HoverImg";
import { StyledLinkDiv, SmallA, SmallSpan, StyledCard, TitleA } from "./index.style";

interface cardData {
  src?: string;
  title?: string;
  smallText?: string;
  mainLink?: string;
  smallLink?: string;
}

export interface CardProps {
  varient: string;
  dataType: "track" | "magazine" | "playlist" | "news" | "myPlaylist" | "album";
  rawData?: any;
}

function convertData(
  dataType: "track" | "magazine" | "playlist" | "news" | "myPlaylist" | "album",
  rawData?: any,
): cardData {
  switch (dataType) {
    case "magazine":
      return {
        title: rawData.magazineName,
        smallText: `${rawData.createdAt.substring(0, 10)}`,
        src: rawData.cover,
        mainLink: `/magazines/${rawData.id}`,
      };
    case "playlist":
      return {
        title: rawData.playlistName,
        smallText: `${rawData.Users.username}`,
        src: rawData.cover,
        mainLink: `/playlists/${rawData.id}`,
      };
    case "myPlaylist":
      return {
        title: rawData.playlistName,
        smallText: `${rawData.Users.username}`,
        src: rawData.cover,
        mainLink: `/playlists/${rawData.id}`,
      };
    case "album":
      return {
        src: rawData.cover,
        title: rawData.albumName,
        smallText: rawData.artistId,
        mainLink: `/albums/${rawData.id}`,
        smallLink: `/artists/${rawData.artistId}`,
      };
    case "track":
      return {
        src: rawData.Albums.cover,
        title: rawData.trackName,
        smallText: rawData.Artists.artistName,
        mainLink: `/albums/${rawData.Albums.id}`,
        smallLink: `/artists/${rawData.Artists.id}`,
      };
    case "news":
      return {
        src: rawData.cover,
        title: rawData.newsName,
        smallText: "관련 뉴스 보기",
        mainLink: `/playlists/${rawData.playlistId}`,
        smallLink: rawData.newLink,
      };
    default:
      return {};
  }
}

const Card: React.FC<CardProps> = ({ varient, dataType, rawData }: CardProps) => {
  const { src, title, smallText, mainLink, smallLink } = convertData(dataType, rawData);
  const linkHandler = (link?: string) => (e: MouseEvent) => {
    e.stopPropagation();
    Router.push(link || "");
  };

  return (
    <StyledCard varient={varient}>
      <StyledLinkDiv onClick={linkHandler(mainLink)}>
        <HoverImg varient={varient} src={src} />
      </StyledLinkDiv>
      <StyledLinkDiv onClick={linkHandler(mainLink)}>
        <TitleA>{title}</TitleA>
      </StyledLinkDiv>
      {smallLink ? (
        <Link href={`${smallLink}`}>
          <SmallA href={smallLink}>{smallText}</SmallA>
        </Link>
      ) : (
        <SmallSpan>{smallText}</SmallSpan>
      )}
    </StyledCard>
  );
};

export default Card;
