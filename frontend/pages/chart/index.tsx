import { memo } from "react";
import styled from "styled-components";
import ChartSlider from "../../components/ChartSlider";
import { mockData } from "../../components/ChartSlider/index.stories";
import GenreContainer from "../../components/GenreContainer";

const genreData = [
  {
    id: 1,
    genreName: "국내 댄스",
  },
  {
    id: 1,
    genreName: "국내 댄스",
  },
  {
    id: 1,
    genreName: "국내 댄스",
  },
  {
    id: 1,
    genreName: "국내 댄스",
  },
  {
    id: 1,
    genreName: "국내 댄스",
  },
  {
    id: 1,
    genreName: "국내 댄스",
  },
  {
    id: 1,
    genreName: "국내 댄스",
  },
  {
    id: 1,
    genreName: "국내 댄스",
  },
  {
    id: 1,
    genreName: "국내 댄스",
  },
  {
    id: 1,
    genreName: "국내 댄스",
  },
  {
    id: 1,
    genreName: "국내 댄스",
  },
  {
    id: 1,
    genreName: "국내 댄스",
  },
  {
    id: 1,
    genreName: "국내 댄스",
  },
  {
    id: 1,
    genreName: "국내 댄스",
  },
  {
    id: 1,
    genreName: "국내 댄스",
  },
];

const StyledChartPageWrapper = styled.div`
  box-sizing: border-box;
  padding: 5rem 7rem;
`;

const StyledPagetitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem 0rem 1rem 0rem;
`;

const ChartsPage = memo(() => {
  return (
    <StyledChartPageWrapper>
      <StyledPagetitle>차트</StyledPagetitle>
      <ChartSlider title="TOP 100" titleLink="" data={mockData.data} />
      <ChartSlider title="국내 TOP 100" titleLink="" data={mockData.data} />
      <GenreContainer title="장르 바로가기" data={genreData} />
    </StyledChartPageWrapper>
  );
});

export default ChartsPage;
