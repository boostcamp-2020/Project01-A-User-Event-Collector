import { memo } from "react";
import styled from "styled-components";
import HotMagCard from "../../components/HotMagCard";
import Card from "../../components/Card";

const TempSlide = styled.div`
  display: flex;
`;

const IndexPage = memo(({ Magazines, News, Playlists }: any) => {
  return (
    <>
      <HotMagCard />
      <h1>Magazines</h1>
      <TempSlide>
        {Magazines?.map((magazine: any) => (
          <Card dataType={"magazine"} rawData={magazine} varient={"todayBig"} />
        ))}
      </TempSlide>

      <hr />

      <h1>News</h1>
      <TempSlide>
        {News?.map((news: any) => (
          <Card dataType={"news"} rawData={news} varient={"todayNews"} />
        ))}
      </TempSlide>

      <hr />

      <h1>VIBE 추천 플레이리스트</h1>
      <TempSlide>
        {Playlists?.map((playlist: any) => (
          <Card dataType={"playlist"} rawData={playlist} varient={"todayBig"} />
        ))}
      </TempSlide>
    </>
  );
});

export default IndexPage;

export async function getStaticProps() {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const VIBE_ID = 1; //나중에 vibe 아이디로 변경해야 함
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
