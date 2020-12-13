import React from "react";
import { GetServerSideProps } from "next";
import findTokenFromCookie from "../../utils/findTokenFromCookie";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";

const AlbumPage = ({ Albums }: any): React.ReactElement => {
  return <DetailPage type="album" detailData={Albums} tracks={Albums.Tracks} />;
};

export default AlbumPage;

// export async function getStaticPaths() {
//   const {
//     data: { Artists },
//   }: any = await myAxios.get(`/artists`);
//   const paths = Artists.map((artist: any) => `/artists/${artist.id}`);

//   return { paths, fallback: false };
// }

export async function getServerSideProps(context: GetServerSideProps) {
  const { params, req } = context;
  const Cookie = req.headers.cookie;
  const jwt = findTokenFromCookie(Cookie);

  const res = await myAxios.get(`/artists/${params.pid}`, jwt);
  const {
    data: { Artists },
  }: any = res;
  return { props: { Artists } };
}
