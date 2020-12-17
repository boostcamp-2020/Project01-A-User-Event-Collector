import React from "react";
import styled from "styled-components";

export interface Props {
  data: {
    id?: number;
    genreName?: string;
    genreColor: string;
  };
}

interface GenreColorProps {
  genreColor?: string;
}

const StyledGenreCard = styled.li`
  display: flex;
  align-items: center;
  background-color: #ddd;
  width: 11rem;
  height: 4rem;
  border-radius: 0.3rem;
`;

const ColorDiv = styled.div<GenreColorProps>`
  width: 0.25rem;
  height: 80%;
  border-radius: 0.1rem;
  margin: 5% 7px;
  background-color: ${(props) => props.genreColor};
`;
const StyledGenreCardName = styled.div`
  margin-left: 10px;
  text-align: left;
  padding: 1.2rrem 0;
  height: 1.5rem;
`;

const GenreCard: React.FC<Props> = ({ data }: Props) => {
  const { genreName, genreColor } = data;
  return (
    <StyledGenreCard>
      <ColorDiv genreColor={genreColor} />
      <StyledGenreCardName>{genreName}</StyledGenreCardName>
    </StyledGenreCard>
  );
};

export default GenreCard;
