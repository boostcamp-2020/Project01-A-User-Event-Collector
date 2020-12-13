import React, { useState, useEffect } from "react";
import { Track } from "../../interfaces";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";

const AlbumPage = ({ pid }: { pid: number }): React.ReactElement => {
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
  const initAlbums = {
    id: 0,
    albumName: "",
    description: "",
    cover: "",
    artistId: 0,
    Artists: {
      artistName: "",
    },
    Tracks: initTracks,
  };

  const [albums, setAlbums] = useState(initAlbums);
  const [tracks, setTracks] = useState(initTracks);

  useEffect(() => {
    myAxios.get(`/albums/${pid}`).then((result: any) => {
      const { data } = result;

      setAlbums(data.Albums);
      setTracks(data.Albums.Tracks);
    });
  }, []);
  return <DetailPage type="album" detailData={albums} tracks={tracks} />;
};

export default AlbumPage;

export async function getStaticPaths() {
  const {
    data: { Albums },
  }: any = await myAxios.get(`/albums`);
  const paths = Albums.map((album: any) => `/albums/${album.id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { pid } = params;
  return { props: { pid } };
}
