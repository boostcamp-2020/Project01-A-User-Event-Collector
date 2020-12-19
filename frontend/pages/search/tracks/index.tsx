import React, { useState, useEffect } from "react";
import myAxios from "../../../utils/myAxios";
import {
  StyledSearchTrackPage,
  StyledResult,
  StyledResultText,
  StyledResultButtons,
  StyledPlayAllButton,
  StyledRandomPlayButton,
  StyledSearchTrackCards,
  StyledIcons,
} from "./styled";
import Tracklist from "../../../components/Tracklist";
import icons from "../../../constant/icons";

const SearchTrackPage = ({ filter }: { filter: string }): React.ReactElement => {
  const [sampleTracks, setSampleTracks] = useState([]);

  useEffect(() => {
    myAxios.get(`/search/tracks?filter=${filter}&page=1`).then((response: any) => {
      const { data } = response;
      setSampleTracks(data);
    });
  }, [filter]);

  return (
    <StyledSearchTrackPage>
      <StyledResult>
        <StyledResultText>{`'${filter}'의 검색 결과`}</StyledResultText>
        <StyledResultButtons>
          <StyledPlayAllButton>
            <StyledIcons>{icons.play}</StyledIcons>전체재생
          </StyledPlayAllButton>
          <StyledRandomPlayButton>
            <StyledIcons>{icons.random}</StyledIcons>랜덤재생
          </StyledRandomPlayButton>
        </StyledResultButtons>
      </StyledResult>
      <StyledSearchTrackCards>
        <Tracklist data={sampleTracks} />
      </StyledSearchTrackCards>
    </StyledSearchTrackPage>
  );
};

SearchTrackPage.getInitialProps = async ({ query }: { query?: { filter?: string } }) => {
  if (query && query.filter) {
    const { filter } = query;
    return { filter };
  }
};

export default SearchTrackPage;
