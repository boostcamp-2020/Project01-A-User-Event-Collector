import React, { FC } from "react";
import styled from "styled-components";
import DetailPage from "../../components/DetailPage";
import { Playlist } from "../../interfaces";

const PlaylistPage: FC<Playlist[]> = ({ Playlists }: any) => {
  return <DetailPage type="Playlists" detailData={Playlists} tracks={Playlists.Tracks} />;
};

export default PlaylistPage;

export async function getServerSideProps({ params }: any): Promise<any> {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/playlists/${params.pid}`);
  const { Playlists } = await res.json();

  return { props: { Playlists } };
}
