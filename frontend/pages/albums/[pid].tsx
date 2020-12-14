import React, { FC } from "react";
import { GetServerSideProps } from "next";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";
import { Album } from "../../interfaces";
import findTokenFromCookie from "../../utils/findTokenFromCookie";

const AlbumPage: FC<Album[]> = ({ Albums }: any) => {
  return <DetailPage type="album" detailData={Albums} tracks={Albums.Tracks} />;
};

export default AlbumPage;

export async function getServerSideProps({ params }: any): Promise<any> {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;
  // const Cookie = req.headers.cookie;
  // const jwt = findTokenFromCookie(Cookie);

  const res = await fetch(`${apiUrl}:${apiPort}/api/albums/${params.pid}`);
  const { Albums } = await res.json();

  return { props: { Albums } };
}
