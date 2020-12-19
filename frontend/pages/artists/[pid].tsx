import React, { FC } from "react";
import DetailPage from "../../components/DetailPage";
import { Artist } from "../../interfaces";

const ArtistPage: FC<Artist[]> = ({ Artists }: any) => {
  return <DetailPage type="artist" detailData={Artists} tracks={Artists.Tracks} />;
};

export default ArtistPage;

export async function getServerSideProps({ params }: any): Promise<any> {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/artists/${params.pid}`);
  const { Artists } = await res.json();

  return { props: { Artists } };
}
