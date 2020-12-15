import React, { FC } from "react";
import styled from "styled-components";
import DetailPage from "../../components/DetailPage";
import PlaylistSelectModal from "../../components/Modals/PlaylistSelector";
import { Playlist } from "../../interfaces";

const StylePlaylistPage = styled.div`
  height: 100vh;
`;

const PlaylistPage: FC<Playlist[]> = ({ Playlists }: any) => {
  return (
    <StylePlaylistPage>
      <DetailPage type="playlist" detailData={Playlists} tracks={Playlists.Tracks} />
      <PlaylistSelectModal tracks={Playlists.Tracks} />
    </StylePlaylistPage>
  );
};

export default PlaylistPage;

export async function getServerSideProps({ params }: any): Promise<any> {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;
  // const Cookie = req.headers.cookie;
  // const jwt = findTokenFromCookie(Cookie);

  const res = await fetch(`${apiUrl}:${apiPort}/api/playlists/${params.pid}`);
  const { Playlists } = await res.json();

  return { props: { Playlists } };
}
