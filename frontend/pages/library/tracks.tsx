import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import myAxios from "../../utils/myAxios";
import Tracklist from "../../components/Tracklist";

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
  display: flex;
  margin-top: 1rem;
  row-gap: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  & > li:nth-child(5n + 1) {
    margin-left: 0;
  }
`;

const TracksLibraryPage = memo(() => {
  const [likedTracks, setLikedTracks] = useState([]);

  useEffect(() => {
    (async () => {
      const res: any = await myAxios.get("/library/tracks");
      setLikedTracks(res.data.Tracks);
    })();
  }, []);

  return (
    <>
      <StyledLibraryText>보관함</StyledLibraryText>
      <StyledPagetitle>노래</StyledPagetitle>

      <StyledSection>
        <Tracklist data={likedTracks} />
      </StyledSection>
    </>
  );
});

export default TracksLibraryPage;
