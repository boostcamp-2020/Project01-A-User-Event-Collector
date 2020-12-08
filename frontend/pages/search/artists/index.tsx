import React, { useState, useEffect } from "react";
import myAxios from "../../../utils/myAxios";
import {
  StyledSearchTrackPage,
  StyledResult,
  StyledResultText,
  StyledSearchTrackCards,
} from "./styled";
import SearchTrackCards from "../../../components/SearchSamples/tracks";
import icons from "../../../constant/icons";

const SearchTrackPage = ({ filter }: { filter: string }): React.ReactElement => {
  const [sampleAlbums, setSampleAlbums] = useState([]);

  useEffect(() => {
    myAxios.get(`/search/albums?filter=${filter}&page=1`).then((response: any) => {
      const { data } = response;
      setSampleAlbums(data);
    });
  }, []);

  return (
    <StyledSearchTrackPage>
      <StyledResult>
        <StyledResultText>{`'${filter}'의 검색 결과`}</StyledResultText>
      </StyledResult>
      <StyledSearchTrackCards>
        <SearchTrackCards data={sampleAlbums} />
      </StyledSearchTrackCards>
    </StyledSearchTrackPage>
  );
};

SearchTrackPage.getInitialProps = async ({ query }: { query?: { filter?: string } }) => {
  const { filter } = query;

  return { filter };
};

export default SearchTrackPage;
