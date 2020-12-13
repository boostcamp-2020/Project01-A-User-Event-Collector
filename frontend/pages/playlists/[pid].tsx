import React from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import findTokenFromCookie from "../../utils/findTokenFromCookie";
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

// export async function getStaticPaths() {
//   const {
//     data: { Playlists },
//   }: any = await myAxios.get(`/playlists`);
//   const paths = Playlists.map((playlist: any) => `/playlists/${playlist.id}`);

//   return { paths, fallback: false };
// }

export async function getServerSideProps(context: GetServerSideProps) {
  const { params, req } = context;
  const Cookie = req.headers.cookie;
  const jwt = findTokenFromCookie(Cookie);

  const res = await myAxios.get(`/playlists/${params.pid}`, jwt);
  const {
    data: { Playlists },
  }: any = res;
  return { props: { Playlists } };
}
