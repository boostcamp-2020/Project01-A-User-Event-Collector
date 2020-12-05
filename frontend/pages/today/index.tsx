import { memo } from "react";
import styled from "styled-components";
import HotMagCard from "../../components/HotMagCard";
import GlobalStyles from "../../components/GlobalStyles";
import Card from "../../components/Card";

const TempSlide = styled.div`
  display: flex;
`;

const IndexPage = memo(({ Magazines, News, Playlists }: any) => {
  return (
    <>
      <HotMagCard />

      {console.log(Magazines)}
      {console.log(News)}

      <div>플레이리스트</div>
      <TempSlide>
        {Playlists?.map((playlist: any) => (
          <Card dataType={"playlist"} rawData={playlist} varient={"todayBig"} />
        ))}
      </TempSlide>

      <GlobalStyles />
    </>
  );
});

export default IndexPage;

export async function getStaticProps() {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const VIBE_ID = 1;
  const dataLength = 10;
  const resolveArr = await Promise.all([
    fetch(`${apiUrl}:${apiPort}/api/magazines?limit=${dataLength}`),
    fetch(`${apiUrl}:${apiPort}/api/news?limit=${dataLength}`),
    fetch(`${apiUrl}:${apiPort}/api/playlists?filter=${VIBE_ID}&limit=${dataLength}`),
  ]);

  const result = await Promise.all(resolveArr.map((resolve) => resolve.json()));
  const { Magazines } = result[0];
  const { News } = result[1];
  const { Playlists } = result[2];

  return {
    props: {
      Magazines: Magazines,
      News: News,
      Playlists: Playlists,
    },
  };
}
