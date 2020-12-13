import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Track } from "../../interfaces";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";

const StyleMagazinePage = styled.div`
  height: 100vh;
`;

const ArtistsPage = ({ pid }: { pid: number }): React.ReactElement => {
  const initTracks: Track[] = [
    {
      id: 0,
      trackName: "",
      albumTrackNumber: 0,
      albumId: 0,
      Albums: {
        id: 0,
        albumName: "",
        description: "",
        cover: "",
        artistId: 0,
      },
      Artists: [
        {
          id: 0,
          artistName: "",
          cover: "",
        },
      ],
      Liked: false,
    },
  ];
  const initArtists = {
    id: 0,
    artistName: "",
    cover: "",
    description: "",
    Tracks: initTracks,
  };

  const [artists, setArtists] = useState(initArtists);
  const [tracks, setTracks] = useState(initTracks);

  useEffect(() => {
    myAxios.get(`/artists/${pid}`).then((result: any) => {
      const { data } = result;

      setArtists(data.Artists);
      setTracks(data.Artists.Tracks);
    });
  }, []);

  return (
    <StyleMagazinePage>
      <DetailPage type="artist" detailData={artists} tracks={tracks} />
    </StyleMagazinePage>
  );
};

export default ArtistsPage;

export async function getStaticPaths() {
  const {
    data: { Artists },
  }: any = await myAxios.get(`/artists`);
  const paths = Artists.map((artist: any) => `/artists/${artist.id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { pid } = params;
  return { props: { pid } };
}
