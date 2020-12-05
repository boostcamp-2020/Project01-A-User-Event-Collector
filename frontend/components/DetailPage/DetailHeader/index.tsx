import React, { FC } from "react";
import styled from "styled-components";
import ButtonBox from "../DetailButtonBox";
import Img from "../../Img";

interface Props {
  detailType: "album" | "playlist" | "artist" | "magazine" | "news";
  detailData: string;
}

const makeProps = (detailType: string, detailData: any) => {
  console.log(detailData);
  const result: any = {};
  result.id = detailData.id;
  result.description = detailData?.description; //artist테이블에 desc없음
  result.cover = detailData?.cover; //news테이블에 cover 없음

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
  }
  return result;
};

const StyleHeader = styled.div`
  display: flex;
  border: 3px solid black;
`;

const Header: FC<Props> = ({ detailType, detailData }) => {
  const props = makeProps(detailType, detailData);

  return (
    <StyleHeader>
      {console.log(props)}
      <Img src={props.cover} varient="descriptionCover" />
      <div>
        <h2>{props.name}</h2>
        <h3>{props.owner || props.magazineType}</h3>
        <h4>{props.magazineType}</h4>
        <div>{props.description}</div>
        {/* //button box에 id, track배열 넘겨야 함 */}
        <ButtonBox />
      </div>
    </StyleHeader>
  );
};

export default Header;
