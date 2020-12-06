import { memo } from "react";
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

const ChartsPage = memo(() => {
  return (
    <>
      <h1>차트</h1>
      <ChartSlider title="TOP 100" titleLink="" data={mockData.data} />
      <ChartSlider title="국내 TOP 100" titleLink="" data={mockData.data} />
      <GenreContainer title="장르 바로가기" data={genreData} />
    </>
  );
});

export default ChartsPage;
