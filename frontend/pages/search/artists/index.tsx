import React, { useState, useEffect } from "react";
import myAxios from "../../../utils/myAxios";
import {
  StyledSearchArtistPage,
  StyledResult,
  StyledResultText,
  StyledSearchArtistCards,
} from "./styled";
import SearchArtistCards from "../../../components/SearchSamples/artists";

const SearchArtistPage = ({ filter }: { filter: string }): React.ReactElement => {
  const [sampleArtists, setSampleArtists] = useState([]);

  useEffect(() => {
    myAxios.get(`/search/artists?filter=${filter}&page=1`).then((response: any) => {
      const { data } = response;
      setSampleArtists(data);
    });
  }, [filter]);

  return (
    <StyledSearchArtistPage>
      <StyledResult>
        <StyledResultText>{`'${filter}'의 검색 결과`}</StyledResultText>
      </StyledResult>
      <StyledSearchArtistCards>
        <SearchArtistCards data={sampleArtists} />
      </StyledSearchArtistCards>
    </StyledSearchArtistPage>
  );
};

SearchArtistPage.getInitialProps = async ({ query }: { query?: { filter?: string } }) => {
  if (query && query.filter) {
    const { filter } = query;
    return { filter };
  }
};

export default SearchArtistPage;
