import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Track } from "../../interfaces";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";

const StyleNewsPage = styled.div`
  height: 100vh;
`;

const NewsPage = ({ pid }: { pid: number }): React.ReactElement => {
  const initTracks: Track[] = [
    {
      id: 0,
      trackName: "",
      albumTrackNumber: 0,
      albumId: 0,
      Albums: {
        id: 0,
        albumName: "",
        description: "",
        cover: "",
        artistId: 0,
      },
      Artists: [
        {
          id: 0,
          artistName: "",
          cover: "",
        },
      ],
      Liked: false,
    },
  ];
  const initNews = {
    id: 0,
    newsName: "",
    type: "",
    description: "",
    playlistId: 0,
    cover: "",
    link: "",
    Tracks: initTracks,
  };

  const [news, setNews] = useState(initNews);
  const [tracks, setTracks] = useState(initTracks);

  useEffect(() => {
    myAxios.get(`/news/${pid}`).then((result: any) => {
      const { data } = result;

      setNews(data.News);
      setTracks(data.News.Tracks);
    });
  }, []);
  return (
    <StyleNewsPage>
      <DetailPage type="news" detailData={news} tracks={tracks} />
    </StyleNewsPage>
  );
};

export default NewsPage;

export async function getStaticPaths() {
  const {
    data: { News },
  }: any = await myAxios.get(`/news`);
  const paths = News.map((news: any) => `/news/${news.id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { pid } = params;
  return { props: { pid } };
}
