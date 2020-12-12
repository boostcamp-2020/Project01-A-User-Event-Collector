import styled from "styled-components";
import React from "react";
import DetailPage from "../../components/DetailPage";
import { Collector } from "../../event";
import EventObjectExample from "../../event/Exampe_eventObject";

const StyleMagazinePage = styled.div`
  height: 100vh;
`;

const MagazinePage = ({ Magazines }: any) => {
  return (
    <Collector eventConfig={EventObjectExample} dispatch={console.log}>
      <StyleMagazinePage>
        <DetailPage type="magazine" detailData={Magazines} tracks={Magazines.Tracks} />
      </StyleMagazinePage>
    </Collector>
  );
};

export default MagazinePage;

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
