import React from "react";
import styled from "styled-components";
import DetailPage from "../../components/DetailPage";

const StylePlaylistPage = styled.div``;

const PlaylistPage = ({ Magazines }: any) => {
  return (
    <StylePlaylistPage>
      <DetailPage detailType={"magazine"} detailData={Magazines} tracks={Magazines.Tracks} />
    </StylePlaylistPage>
  );
};

export default PlaylistPage;

export async function getStaticPath() {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/magazines`);
  const magazines = await res.json();
  const paths = magazines.map((magazine: any) => `/magazines/${magazine.id}`);

  return { paths, fallback: false };
}

export async function getServerSideProps({ params }: any) {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/magazines/${params.pid}`);
  const { Magazines } = await res.json();

  return { props: { Magazines } };
}
