import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Track } from "../../interfaces";
import DetailPage from "../../components/DetailPage";
import myAxios from "../../utils/myAxios";

const StyleMagazinePage = styled.div`
  height: 100vh;
`;

const MagazinePage = ({ pid }: { pid: number }): React.ReactElement => {
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
  const initMagazines = {
    id: 0,
    magazineName: "",
    magazineType: "",
    description: "",
    createdAt: "",
    playlistId: 0,
    cover: "",
    Tracks: initTracks,
  };

  const [magazines, setMagazines] = useState(initMagazines);
  const [tracks, setTracks] = useState(initTracks);

  useEffect(() => {
    myAxios.get(`/magazines/${pid}`).then((result: any) => {
      const { data } = result;

      setMagazines(data.Magazines);
      setTracks(data.Magazines.Tracks);
    });
  }, []);
  return (
    <StyleMagazinePage>
      <DetailPage type="magazine" detailData={magazines} tracks={tracks} />
    </StyleMagazinePage>
  );
};

export default MagazinePage;

export async function getStaticPaths() {
  const {
    data: { Magazines },
  }: any = await myAxios.get(`/magazines`);
  const paths = Magazines.map((magazine: any) => `/magazines/${magazine.id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { pid } = params;
  return { props: { pid } };
}
