import React from "react";
import { GetServerSideProps } from "next";
import findTokenFromCookie from "../../utils/findTokenFromCookie";
import DetailPage from "../../components/DetailPage";

const ArtistPage = ({ Artists }: any): React.ReactElement => {
  return <DetailPage type="artist" detailData={Artists} tracks={Artists.Tracks} />;
};

export default ArtistPage;

export async function getServerSideProps({ params }: any): Promise<any> {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;
  // const Cookie = req.headers.cookie;
  // const jwt = findTokenFromCookie(Cookie);

  const res = await fetch(`${apiUrl}:${apiPort}/api/artists/${params.pid}`);
  const { Artists } = await res.json();

  return { props: { Artists } };
}
