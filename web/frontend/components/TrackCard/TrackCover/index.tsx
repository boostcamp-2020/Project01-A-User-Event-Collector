import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  cover: string | null;
}

interface Styles {
  cover: string | null;
}

const StyleTrackCover = styled.img<Styles>`
  object-fit: cover;
  width: 2rem;
  height: 2rem;
  src: ${({ cover }) => cover};
  &:hover {
    background-color: black;
  }
`;

const TrackCover: FC<Props> = ({ cover }) => {
  return <StyleTrackCover cover={cover} />;
};

export default TrackCover;
