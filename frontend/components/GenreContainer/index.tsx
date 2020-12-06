import React from "react";
import styled from "styled-components";
import GenreCard from "./GenreCard";

export interface Props {
  title?: string;
  data?: any;
}

const StyledGenreContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 70rem;
  height: 15rem;
  & > a > svg {
    width: 0.7rem;
    height: 0.7rem;
  }
`;

const GenreContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(20%, auto));
  grid-template-rows: repeat(3, minmax(33%, auto));
  grid-auto-flow: column;
  position: relative;
  grid-row-gap: 1rem;
  width: 100%;
  height: 100%;
  & > li {
    margin: 0;
  }
  padding-inline-start: 0;
`;

const GenreContainer: React.FC<Props> = ({ title, data }: Props) => {
  return (
    <StyledGenreContainer>
      <span>{title}</span>
      <GenreContent>
        {data.map((value: any) => (
          <GenreCard data={value} />
        ))}
      </GenreContent>
    </StyledGenreContainer>
  );
};

export default GenreContainer;
