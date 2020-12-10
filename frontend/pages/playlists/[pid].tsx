import React from "react";
import styled from "styled-components";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";

const StylePlaylistPage = styled.div`
  height: 100vh;
`;

const PlaylistPage = ({ Playlists }: any) => {
  return (
    <StylePlaylistPage>
      <DetailPage type="playlist" detailData={Playlists} tracks={Playlists.Tracks} />
    </StylePlaylistPage>
  );
};

export default PlaylistPage;

export async function getStaticPath() {
  const { data: playlists }: any = await myAxios.get(`/playlists`);
  const paths = playlists.map((artist: any) => `/playlists/${artist.id}`);

  return { paths, fallback: false };
}

export async function getServerSideProps({ params }: any) {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/playlists/${params.pid}`);
  const { Playlists } = await res.json();

  return { props: { Playlists } };
}
