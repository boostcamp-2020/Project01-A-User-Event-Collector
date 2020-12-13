import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";
import findTokenFromCookie from "../../utils/findTokenFromCookie";

const AlbumPage = ({ Albums, jwt }: any): React.ReactElement => {
  return <DetailPage type="album" detailData={Albums} tracks={Albums.Tracks} />;
};

export default AlbumPage;

export async function getServerSideProps(context: GetServerSideProps): Promise<any> {
  const { params, req }: any = context;
  // const Cookie = req.headers.cookie;
  // const jwt = findTokenFromCookie(Cookie);

  const res = await myAxios.get(`/albums/${params.pid}`); // jwt
  const {
    data: { Albums },
  }: any = res;
  return { props: { Albums } };
}
