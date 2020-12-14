import React, { memo } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import { Album } from "../../interfaces";

const StyledLibraryText = styled.div`
  font-size: 1em;
  color: #999999;
  margin-top: 2em;
`;

const StyledPagetitle = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin: 0.2em 0em 1em 0em;
`;

const StyledSection = styled.ul`
  width: 100%;
  padding-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(5, minmax(19%, auto));
  grid-template-rows: repeat(auto-fill, auto);
  grid-auto-flow: row;
  row-gap: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  & > li:nth-child(5n + 1) {
    margin-left: 0;
  }
`;

const AlbumsLibraryPage = memo(({ albums }: any) => {
  return (
    <>
      <StyledLibraryText>보관함</StyledLibraryText>
      <StyledPagetitle>앨범</StyledPagetitle>
      <StyledSection>
        {albums.map((value: Album) => (
          <Card varient="todaySmall" dataType="album" rawData={value} />
        ))}
      </StyledSection>
    </>
  );
});

export default AlbumsLibraryPage;

export async function getServerSideProps() {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  try {
    const res = await fetch(`${apiUrl}:${apiPort}/api/library/albums`);
    const albums = await res.json();
    return {
      props: {
        albums: albums.Albums,
      },
    };
  } catch (err) {
    console.log(err);
  }
  return { props: {} };
}