import React, { useState, useEffect } from "react";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";

const AlbumPage = ({ Albums }: any): React.ReactElement => {
  return <DetailPage type="album" detailData={Albums} tracks={Albums.Tracks} />;
};

export default AlbumPage;

// export async function getStaticPaths() {
//   const {
//     data: { Albums },
//   }: any = await myAxios.get(`/albums`);
//   const paths = Albums.map((album: any) => `/albums/${album.id}`);

//   return { paths, fallback: false };
// }

export async function getServerSideProps({ params, req }: any) {
  const res = await myAxios.get(`/albums/${params.pid}`);
  const {
    data: { Albums },
  }: any = await res;
  return { props: { Albums } };
}
