import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { initCheckedTrack } from "../../reduxModules/checkedTrack";
import DetailPage from "../../components/DetailPage";

const StyleMagazinePage = styled.div`
  height: 100vh;
`;

const ArtistsPage = ({ Artists }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCheckedTrack());
  }, []);
  return (
    <StyleMagazinePage>
      <DetailPage type="artist" detailData={Artists} tracks={Artists.Tracks} />
    </StyleMagazinePage>
  );
};

export default ArtistsPage;

export async function getStaticPath() {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/artists`);
  const artists = await res.json();
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
