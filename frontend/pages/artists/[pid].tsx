import React from "react";
import styled from "styled-components";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";

const StyleMagazinePage = styled.div`
  height: 100vh;
`;

const ArtistsPage = ({ Artists }: any): React.ReactElement => {
  return (
    <StyleMagazinePage>
      <DetailPage type="artist" detailData={Artists} tracks={Artists.Tracks} />
    </StyleMagazinePage>
  );
};

export default ArtistsPage;

export async function getStaticPath() {
  const { data: artists }: any = await myAxios.get(`/artists`);
  const paths = artists.map((artist: any) => `/artists/${artist.id}`);

  return { paths, fallback: false };
}

export async function getServerSideProps({ params }: any) {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/artists/${params.pid}`);
  const { Artists } = await res.json();

  return { props: { Artists } };
}
