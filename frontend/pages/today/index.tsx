import { memo } from "react";
import HotMagCard from "../../components/HotMagCard";
import Slidebar from "../../components/Slidebar";

const IndexPage = memo(({ Magazines, News, Playlists }: any) => {
  return (
    <>
      <HotMagCard />
      <h1>Magazines</h1>
      <Slidebar
        varient="todayBig"
        dataType="magazine"
        title="매거진"
        titleLink=""
        data={Magazines}
      />

      <hr />

      <h1>News</h1>
      <Slidebar varient="todayNews" dataType="news" title="News" titleLink="" data={News} />

      <hr />

      <h1>VIBE 추천 플레이리스트</h1>
      <Slidebar
        varient="todayBig"
        dataType="playlist"
        title="VIBE 추천 플레이리스트"
        titleLink=""
        data={Playlists}
      />
    </>
  );
});

export default IndexPage;

export async function getStaticProps() {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const VIBE_ID = 1; // 나중에 vibe 아이디로 변경해야 함
  const dataLength = 10;

  try {
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
        Magazines,
        News,
        Playlists,
      },
    };
  } catch (err) {
    console.log(err);
  }
  return { props: {} };
}
