import React, { FC } from "react";
import styled from "styled-components";
import ButtonBox from "../DetailButtonBox";
import Img from "../../Img";

interface Props {
  type: "album" | "playlist" | "artist" | "magazine" | "news";
  detailData: string;
}

const makeProps = (detailType: string, detailData: any) => {
  const result: any = {};
  result.id = detailData.id;
  result.description = detailData.description;
  result.cover = detailData.cover;

  switch (detailType) {
    case "album":
      result.name = detailData.albumName;
      result.owner = detailData.Artists.artistName;
      break;

    case "playlist":
      result.name = detailData.playlistName;
      result.owner = detailData.Users.username;
      break;

    case "magazine":
      result.name = detailData.magazineName;
      result.magazineType = detailData.magazineType;
      break;

    case "news":
      result.name = detailData.newsName;
      break;

    case "artist":
      result.name = detailData.artistName;
  }
  return result;
};

const StyleHeader = styled.div`
  display: flex;
  border: 3px solid black;
`;

const DetialHeader: FC<Props> = ({ type, detailData }) => {
  const props = makeProps(type, detailData);

  return (
    <StyleHeader>
      <Img src={props.cover} varient={type === "artist" ? "likedArtist" : "descriptionCover"} />
      <div>
        <h2>{props.name}</h2>
        <h3>{props.owner || props.magazineType}</h3>
        <div>{props.description}</div>
        <ButtonBox />
      </div>
    </StyleHeader>
  );
};

export default DetialHeader;
