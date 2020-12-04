import React, { FC } from "react";
import styled from "styled-components";
import ButtonBox from "./ButtonBox";
import Img from "../Img";

interface Props {
  cover: string;
  albumName: string;
  description: string;
}

const StyleHeader = styled.div`
  display: flex;
`;

//button box에 id, track배열 넘겨야 함
const Header: FC<Props> = ({ cover, albumName, description }) => {
  return (
    <StyleHeader>
      <Img src={cover} varient="descriptionCover" />
      <div>
        <h2>{albumName}</h2>
        <span>{description}</span>
        <ButtonBox />
      </div>
    </StyleHeader>
  );
};

export default Header;
