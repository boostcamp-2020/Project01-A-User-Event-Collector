import Link from "next/link";
import Layout from "../../frontend/components/Layout";

import TrackCard from "../../frontend/components/TrackCard";
import Img from "../../frontend/components/Img";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>

    <TrackCard
      id={21}
      trackName={"트랙 제목"}
      Albums={{
        id: 4,
        albumName: "I trust",
        description: "편견이란 답답한 우리를 무너뜨린 ‘LION'의 귀환! ",
        cover: "https://musicmeta-phinf.pstatic.net/album/005/094/5094136.jpg?type=r360Fll",
        artistId: 2,
      }}
      Artists={[
        {
          id: 2,
          artistName: "아이들",
          cover: "https://musicmeta-phinf.pstatic.net/album/005/094/5094136.jpg?type=r360Fll",
        },
      ]}
    />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Img
      src="https://musicmeta-phinf.pstatic.net/album/005/094/5094136.jpg?type=r360Fll"
      varient="todayNews"
    />
  </Layout>
);

export default IndexPage;
