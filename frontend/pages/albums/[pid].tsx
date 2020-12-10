import React from "react";
import styled from "styled-components";
import DetailPage from "../../components/DetailPage";
import Collector, { EventObject } from "../../event/event_2";

const StyleAlbumPage = styled.div`
  height: 100vh;
`;

const test: EventObject = {
  single: [
    {
      className: "boost_whqudrjs",
      event_id: 1,
      event_name: "prototype",
      event_type: "click",
      once: true,
      description: "너무 잼따",
    },
    {
      className: "boost_dbtjsrb",
      event_id: 2,
      event_name: "prototype",
      event_type: "mouseover",
      once: true,
      description: "너무 잼따",
    },
  ],
};

const AlbumPage = ({ Albums }: any) => {
  return (
    <Collector eventConfig={test}>
      <StyleAlbumPage>
        <DetailPage type="album" detailData={Albums} tracks={Albums.Tracks} />
      </StyleAlbumPage>
    </Collector>
  );
};

export default AlbumPage;

export async function getStaticPath() {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/albums`);
  const albums = await res.json();
  const paths = albums.map((album: any) => `/albums/${album.id}`);

  return { paths, fallback: false };
}

export async function getServerSideProps({ params }: any) {
  const apiUrl = process.env.API_URL;
  const apiPort = process.env.API_PORT;

  const res = await fetch(`${apiUrl}:${apiPort}/api/albums/${params.pid}`);
  const { Albums } = await res.json();

  return { props: { Albums } };
}
