import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Track } from "../../interfaces";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";

const StylePlaylistPage = styled.div`
  height: 100vh;
`;

const PlaylistPage = ({ pid }: { pid: number }): React.ReactElement => {
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
  const initPlaylists = {
    id: 0,
    playlistName: "",
    description: "",
    cover: "",
    author: 0,
    Users: {
      username: "",
    },
    Tracks: initTracks,
  };

  const [playlists, setPlaylists] = useState(initPlaylists);
  const [tracks, setTracks] = useState(initTracks);

  useEffect(() => {
    myAxios.get(`/playlists/${pid}`).then((result: any) => {
      const { data } = result;

      setPlaylists(data.Playlists);
      setTracks(data.Playlists.Tracks);
    });
  }, []);
  return (
    <StylePlaylistPage>
      <DetailPage type="playlist" detailData={playlists} tracks={tracks} />
    </StylePlaylistPage>
  );
};

export default PlaylistPage;

export async function getStaticPaths() {
  const {
    data: { Playlists },
  }: any = await myAxios.get(`/playlists`);
  const paths = Playlists.map((playlist: any) => `/playlists/${playlist.id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { pid } = params;
  return { props: { pid } };
}
