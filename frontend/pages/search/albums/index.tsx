import React, { useState, useEffect } from "react";
import myAxios from "../../../utils/myAxios";
import {
  StyledSearchAlbumPage,
  StyledResult,
  StyledResultText,
  StyledSearchAlbumCards,
} from "./styled";
import SearchAlbumCards from "../../../components/SearchSamples/albums";

const SearchAlbumPage = ({ filter }: { filter: string }): React.ReactElement => {
  const [sampleAlbums, setSampleAlbums] = useState([]);

  useEffect(() => {
    myAxios.get(`/search/albums?filter=${filter}&page=1`).then((response: any) => {
      const { data } = response;
      setSampleAlbums(data);
    });
  }, [filter]);

  return (
    <StyledSearchAlbumPage>
      <StyledResult>
        <StyledResultText>{`'${filter}'의 검색 결과`}</StyledResultText>
      </StyledResult>
      <StyledSearchAlbumCards>
        <SearchAlbumCards data={sampleAlbums} />
      </StyledSearchAlbumCards>
    </StyledSearchAlbumPage>
  );
};

SearchAlbumPage.getInitialProps = async ({ query }: { query?: { filter?: string } }) => {
  if (query && query.filter) {
    const { filter } = query;
    return { filter };
  }
};

export default SearchAlbumPage;
