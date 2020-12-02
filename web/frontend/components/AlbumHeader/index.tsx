import React, { FC } from "react";
import styled from "styled-components";
import Img from "../Img";

interface Props {
  cover: string;
  albumName: string;
  description: string;
}

const StyleAlbumHeader = styled.div`
  display: flex;
`;

//button box에 id, track배열 넘겨야 함
const AlbumHeader: FC<Props> = ({ cover, albumName, description }) => {
  return (
    <StyleAlbumHeader>
      <Img src={cover} varient="descriptionCover" />
      <div>
        <h2>{albumName}</h2>
        <span>{description}</span>
      </div>
    </StyleAlbumHeader>
  );
};

export default AlbumHeader;
