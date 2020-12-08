import React from "react";
import styled from "styled-components";
import DetailPage from "../../components/DetailPage";
import { DefaultCollector, DefaultEmitter } from "../../event/event";

const StyleAlbumPage = styled.div`
  height: 100vh;
`;

const AlbumPage = ({ Albums }: any) => {
  return (
    <DefaultCollector>
      <StyleAlbumPage>
        <DefaultEmitter>
          <DetailPage type="album" detailData={Albums} tracks={Albums.Tracks} />
        </DefaultEmitter>
      </StyleAlbumPage>
    </DefaultCollector>
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
