import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import { Playlist } from "../../interfaces";
import myAxios from "../../utils/myAxios";

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

const PlaylistsLibraryPage = memo(() => {
  const [likedPlaylists, setLikedPlaylists] = useState([]);

  useEffect(() => {
    myAxios.get("/library/playlists").then((res: any) => {
      setLikedPlaylists(res.data.Playlists);
    });
  }, []);

  return (
    <>
      <StyledLibraryText>보관함</StyledLibraryText>
      <StyledPagetitle>플레이리스트</StyledPagetitle>
      <StyledSection>
        {likedPlaylists?.map((value: Playlist) => (
          <Card varient="todaySmall" dataType="playlist" rawData={value} />
        ))}
      </StyledSection>
    </>
  );
});

export default PlaylistsLibraryPage;
