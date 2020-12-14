import React, { FC } from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import findTokenFromCookie from "../../utils/findTokenFromCookie";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";
import { Playlist } from "../../interfaces";

const StylePlaylistPage = styled.div`
  height: 100vh;
`;

const PlaylistPage: FC<Playlist[]> = ({ Playlists }: any) => {
  return (
    <StylePlaylistPage>
      <DetailPage type="playlist" detailData={Playlists} tracks={Playlists.Tracks} />
    </StylePlaylistPage>
  );
};

export default PlaylistPage;

export async function getServerSideProps(context: GetServerSideProps): Promise<any> {
  const { params, req }: any = context;
  // const Cookie = req.headers.cookie;
  // const jwt = findTokenFromCookie(Cookie);

  const res = await myAxios.get(`/playlists/${params.pid}`); // jwt
  const {
    data: { Playlists },
  }: any = res;
  return { props: { Playlists } };
}
