import Link from "next/link";
import { memo } from "react";
import Img from "../../components/Img";
import HotMagCard from "../../components/HotMagCard";
import GlobalStyles from "../../components/GlobalStyles";
import Card from "../../components/Card";

const IndexPage = memo(({ Magazines, News, Playlists }: any) => (
  <>
    <HotMagCard />

    {/* <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Img
      src="https://musicmeta-phinf.pstatic.net/album/005/094/5094136.jpg?type=r360Fll"
      varient="todayNews"
    /> */}
    <GlobalStyles />
  </>
));

export default IndexPage;

export async function getStaticProps() {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  // const magazineProms = fetch(`${apiUrl}:${apiPort}`);
  // const newsProms = fetch(`${apiUrl}:${apiPort}`);
  // const playlistProms = fetch(`${apiUrl}:${apiPort}`);

  const resolveArr = await Promise.all([
    fetch(`${apiUrl}:${apiPort}/api/magazines?limit=1`),
    fetch(`${apiUrl}:${apiPort}/api/news?limit=1`),
    fetch(`${apiUrl}:${apiPort}/api/playlists?limit=1`),
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
