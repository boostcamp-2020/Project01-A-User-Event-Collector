import styled from "styled-components";
import React from "react";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";

const StyleMagazinePage = styled.div`
  height: 100vh;
`;

const MagazinePage = ({ Magazines }: any): React.ReactElement => {
  return (
    <StyleMagazinePage>
      <DetailPage type="magazine" detailData={Magazines} tracks={Magazines.Tracks} />
    </StyleMagazinePage>
  );
};

export default MagazinePage;

export async function getStaticPath() {
  const { data: magazines }: any = await myAxios.get(`/magazines`);
  const paths = magazines.map((artist: any) => `/magazines/${artist.id}`);

  return { paths, fallback: false };
}

export async function getServerSideProps({ params }: any) {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/magazines/${params.pid}`);
  const { Magazines } = await res.json();

  return { props: { Magazines } };
}
