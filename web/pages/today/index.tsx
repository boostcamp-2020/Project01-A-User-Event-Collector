import Link from "next/link";
import Layout from "../../frontend/components/Layout/Layout";

import TrackList from "../../frontend/components/Tracklist";
import Img from "../../frontend/components/Img";
import HotMagCard from "../../frontend/components/HotMagCard";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <HotMagCard />

    <TrackList
      Tracks={[
        {
          id: 21,
          trackName: "Oh my god",
          albumTrackNumber: 1,
          albumId: 4,
          Albums: {
            id: 4,
            albumName: "I trust",
            description: "편견이란 답답한 우리를 무너뜨린 ‘LION'의 귀환! ",
            cover:
              "https://musicmeta-phinf.pstatic.net/album/004/511/4511159.jpg?type=r360Fll&v=20200406175912",
            artistId: 2,
          },
          Artists: [
            {
              id: 2,
              artistName: "아이들",
              cover:
                "https://musicmeta-phinf.pstatic.net/album/004/511/4511159.jpg?type=r360Fll&v=20200406175912",
            },
          ],
        },
        {
          id: 22,
          trackName: "사랑해",
          albumTrackNumber: 2,
          albumId: 4,
          Albums: {
            id: 4,
            albumName: "I trust",
            description: "편견이란 답답한 우리를 무너뜨린 ‘LION'의 귀환! ",
            cover:
              "https://musicmeta-phinf.pstatic.net/album/004/511/4511159.jpg?type=r360Fll&v=20200406175912",
            artistId: 2,
          },
          Artists: [
            {
              id: 2,
              artistName: "아이들",
              cover:
                "https://musicmeta-phinf.pstatic.net/album/004/511/4511159.jpg?type=r360Fll&v=20200406175912",
            },
          ],
        },
        {
          id: 23,
          trackName: "Maybe",
          albumTrackNumber: 3,
          albumId: 4,
          Albums: {
            id: 4,
            albumName: "I trust",
            description: "편견이란 답답한 우리를 무너뜨린 ‘LION'의 귀환! ",
            cover:
              "https://musicmeta-phinf.pstatic.net/album/004/511/4511159.jpg?type=r360Fll&v=20200406175912",
            artistId: 2,
          },
          Artists: [
            {
              id: 2,
              artistName: "아이들",
              cover:
                "https://musicmeta-phinf.pstatic.net/album/004/511/4511159.jpg?type=r360Fll&v=20200406175912",
            },
          ],
        },
        {
          id: 24,
          trackName: "LION",
          albumTrackNumber: 4,
          albumId: 4,
          Albums: {
            id: 4,
            albumName: "I trust",
            description: "편견이란 답답한 우리를 무너뜨린 ‘LION'의 귀환! ",
            cover:
              "https://musicmeta-phinf.pstatic.net/album/004/511/4511159.jpg?type=r360Fll&v=20200406175912",
            artistId: 2,
          },
          Artists: [
            {
              id: 2,
              artistName: "아이들",
              cover:
                "https://musicmeta-phinf.pstatic.net/album/004/511/4511159.jpg?type=r360Fll&v=20200406175912",
            },
          ],
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
