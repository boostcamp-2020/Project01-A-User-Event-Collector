import React from "react";
import styled from "styled-components";

export interface Props {
  data: {
    id?: number;
    genreName?: string;
  };
}

interface GenreColorProps {
  genreColor?: string;
}

const StyledGenreCard = styled.li`
  background-color: #ddd;
  width: 11rem;
  height: 4rem;
  border-radius: 0.3rem;
  display: flex;
`;

const ColorDiv = styled.div<GenreColorProps>`
  width: 5px;
  height: 80%;
  border-radius: 3px;
  margin: 5% 7px;
  background-color: ${(props) => props.genreColor};
`;
const NameDiv = styled.div`
  margin-left: 10px;
  text-align: left;
  padding: 1.2rem 0;
  height: 1.5rem;
`;

const GenreCard: React.FC<Props> = ({ data }: Props) => {
  const { genreName } = data;
  return (
    <StyledGenreCard>
      <ColorDiv genreColor={`#${Math.random().toString(16).substr(2, 6)}`} />
      <NameDiv>{genreName}</NameDiv>
    </StyledGenreCard>
  );
};

export default GenreCard;
