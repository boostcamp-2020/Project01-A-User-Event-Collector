import React, { useState, useEffect } from "react";
import myAxios from "../../utils/myAxios";
import StyledSearchPage from "./styled";
import SearchSamples from "../../components/SearchSamples/all";

const SearchPage = ({ filter }: { filter: string }): React.ReactElement => {
  const [sampleTracks, setSampleTracks] = useState([]);
  const [sampleArtists, setSampleArtists] = useState([]);
  const [sampleAlbums, setSampleAlbums] = useState([]);

  useEffect(() => {
    myAxios.get(`/search?filter=${filter}&limit=3`).then((response: any) => {
      const {
        data: { Tracks, Albums, Artists },
      } = response;
      setSampleTracks(Tracks);
      setSampleArtists(Artists);
      setSampleAlbums(Albums);
    });
  }, []);
  return (
    <StyledSearchPage>
      <SearchSamples sectionTitle="노래" data={sampleTracks} filter={filter} />
      <SearchSamples sectionTitle="앨범" data={sampleAlbums} filter={filter} />
      <SearchSamples sectionTitle="아티스트" data={sampleArtists} filter={filter} />
    </StyledSearchPage>
  );
};

SearchPage.getInitialProps = async ({ query }: { query?: { filter?: string } }) => {
  if (query && query.filter) {
    const { filter } = query;
    return { filter };
  }
};

export default SearchPage;
