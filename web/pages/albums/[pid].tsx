import React from "react";
import TrackList from "../../frontend/components/Tracklist";
import styled from "styled-components";
import AlbumHeader from "../../frontend/components/AlbumHeader";
// interface Props {}

const StyleAlbumPage = styled.div``;

const AlbumPage = ({ Albums }: any) => {
  return (
    <StyleAlbumPage>
      <AlbumHeader
        cover={Albums.cover}
        albumName={Albums.albumName}
        description={Albums.description}
      />
      <TrackList Tracks={Albums.Tracks} />
    </StyleAlbumPage>
  );
};

export default AlbumPage;

export async function getStaticPath() {
  const res = await fetch("http://localhost:3000/api/albums");
  const albums = await res.json();
  const paths = albums.map((album: any) => `/albums/${album.id}`);

  return { paths, fallback: false };
}

export async function getServerSideProps({ params }: any) {
  const res = await fetch(`http://localhost:3000/api/albums/${params.pid}`);
  const { Albums } = await res.json();

  return { props: { Albums } };
}
