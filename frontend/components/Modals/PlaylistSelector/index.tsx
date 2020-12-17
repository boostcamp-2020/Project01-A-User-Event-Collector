import React, { useEffect, useState } from "react";
import styled from "styled-components";
import icons from "../../../constant/icons";
import { Playlist, Track } from "../../../interfaces";
import myAxios from "../../../utils/myAxios";
import ModalNewRow from "./NewRow";
import ModalRow from "./ModalRow";

interface ModalProps {
  showModal?: "display" | "none";
}

const StyledModalLayer = styled.div<ModalProps>`
  display: ${(props) => props.showModal};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;
const StyledModal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 2rem;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1001;
  width: 22rem;
  background-color: white;
  border-radius: 1.25%;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const StyledX = styled.div`
  position: absolute;
  display: flex;
  font-size: 1.25rem;
  top: 0.75rem;
  right: 0.75rem;
  justify-content: center;
  align-items: center;
`;

const PlaylistList = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  tracks: Track[];
}

const PlaylistSelectModal: React.FC<Props> = ({ tracks }: Props) => {
  const [myPlaylists, setMyPlaylists] = useState([]);
  const [showModal, setShowModal] = useState<"display" | "none">("none"); // 상위에서 받아야함
  useEffect(() => {
    if (localStorage !== undefined) {
      const userProfile = JSON.parse(localStorage.userProfile);
      myAxios.get(`/playlists?filter=1`).then((value: any) => {
        setMyPlaylists(value.data.Playlists);
      });
    }
  }, []);
  return (
    <StyledModalLayer showModal={showModal}>
      <StyledModal>
        <StyledX>{icons.x}</StyledX>
        <StyledTitle>내 플레이리스트에 추가</StyledTitle>
        <PlaylistList>
          <ModalNewRow />
          {myPlaylists.map((value) => (
            <ModalRow data={value} tracks={tracks} setShowModal={setShowModal} />
          ))}
        </PlaylistList>
      </StyledModal>
    </StyledModalLayer>
  );
};

export default PlaylistSelectModal;
