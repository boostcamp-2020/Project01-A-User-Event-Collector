import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Playlist, Track } from "../../../interfaces";
import myAxios from "../../../utils/myAxios";
import ModalNewRow from "./newRow";
import ModalRow from "./row";

const ModalLayer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: #55555555;
  z-index: 1000;
`;
const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1001;
  width: 20rem;
  padding: 2rem 0 2.2rem;
  background-color: white;
`;

const TitleText = styled.div``;
const PlaylistList = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  tracks: Track[];
}

const PlaylistSelectModal: React.FC<Props> = ({ tracks }: Props) => {
  const [myPlaylists, setMyPlaylists] = useState([]);
  useEffect(() => {
    if (localStorage !== undefined) {
      const userProfile = JSON.parse(localStorage.userProfile);
      myAxios.get(`/playlists?filter=1`).then((value: any) => {
        setMyPlaylists(value.data.Playlists);
      });
    }
  }, []);
  return (
    <ModalLayer>
      <ModalContent>
        <TitleText>내 플레이리스트에 추가</TitleText>
        <PlaylistList>
          <ModalNewRow />
          {myPlaylists.map((value) => (
            <ModalRow data={value} tracks={tracks} />
          ))}
        </PlaylistList>
      </ModalContent>
    </ModalLayer>
  );
};

export default PlaylistSelectModal;
