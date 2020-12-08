import React from "react";
import styled from "styled-components";
import GenreCard from "./GenreCard";

export interface Props {
  title?: string;
  data?: any;
}

const StyledGenreTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.2em;
`;

const StyledGenreContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 70em;
  height: 15em;
  margin: 1em 0em;
  & > a > svg {
    width: 0.7em;
    height: 0.7em;
  }
`;

const GenreContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(20%, auto));
  grid-template-rows: repeat(3, minmax(33%, auto));
  grid-auto-flow: column;
  position: relative;
  grid-row-gap: 1em;
  width: 100%;
  height: 100%;
  margin: 1em 0em;
  & > li {
    margin: 0;
  }
  padding-inline-start: 0;
`;

const GenreContainer: React.FC<Props> = ({ title, data }: Props) => {
  return (
    <StyledGenreContainer>
      <StyledGenreTitle>{title}</StyledGenreTitle>
      <GenreContent>
        {data.map((value: any) => (
          <GenreCard data={value} />
        ))}
      </GenreContent>
    </StyledGenreContainer>
  );
};

export default GenreContainer;
