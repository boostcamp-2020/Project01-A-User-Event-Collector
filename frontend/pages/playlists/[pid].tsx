import React from "react";
import styled from "styled-components";
import DetailPage from "../../components/DetailPage";

const StylePlaylistPage = styled.div``;

const PlaylistPage = ({ Playlists }: any) => {
  return (
    <StylePlaylistPage>
      <DetailPage detailType={"playlist"} detailData={Playlists} tracks={Playlists.Tracks} />
    </StylePlaylistPage>
  );
};

export default PlaylistPage;

export async function getStaticPath() {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/playlists`);
  const playlists = await res.json();
  const paths = playlists.map((playlist: any) => `/playlists/${playlist.id}`);

  return { paths, fallback: false };
}

export async function getServerSideProps({ params }: any) {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/playlists/${params.pid}`);
  const { Playlists } = await res.json();

  return { props: { Playlists } };
}
