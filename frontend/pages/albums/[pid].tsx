import React from "react";
import DetailPage from "../../components/DetailPage";
import { DefaultCollector, DefaultEmitter } from "../../event/event";
import myAxios from "../../utils/myAxios";

const AlbumPage = ({ Albums }: any) => {
  return (
    <DefaultCollector>
      <DefaultEmitter>
        <DetailPage type="album" detailData={Albums} tracks={Albums.Tracks} />
      </DefaultEmitter>
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
  const res = await myAxios.get(`/albums/${params.pid}`);
  const { Albums } = await res.data;
  return { props: { Albums } };
}
