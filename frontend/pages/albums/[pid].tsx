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
  const { data: albums } = await myAxios.get(`/albums`);
  const paths = albums.map((album: any) => `/albums/${album.id}`);

  return { paths, fallback: false };
}

export async function getServerSideProps({ params }: any) {
  const res = await myAxios.get(`/albums/${params.pid}`);
  const { Albums } = await res.data;
  return { props: { Albums } };
}
