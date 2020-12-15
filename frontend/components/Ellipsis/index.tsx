/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FC, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { concatenatePlayQueue } from "../../reduxModules/playQueue";
import { Album, Artist, Playlist, Track } from "../../interfaces";
import icons from "../../constant/icons";

const StyledEllipsis = styled.div`
  z-index: 1300;
  position: absolute;
  font-size: 2rem;
  bottom: 0rem;
  right: 0rem;
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;
  background-color: transparent;
  width: 100%;
  height: 100%;
`;

const StyledEllipsisModal = styled.div`
  position: absolute;
  z-index: 2000;
  top: 20px;
  background-color: gray;
  padding: 10px;
  border-radius: 10px;
  font-size: 17px;
`;

interface Props {
  type: "track" | "album" | "artist" | "playlist";
  data: Track | Album | Artist | Playlist;
}

const Ellipsis: FC<any> = ({ type, data }: any) => {
  const [isEllipsisOpen, setIsEllipsisOpen] = useState(false);
  const dispatch = useDispatch();

  const ellipsisHandler = () => setIsEllipsisOpen(!isEllipsisOpen);
  const overlayHandler = () => setIsEllipsisOpen(false);

  const libraryBtnHandler = () => alert("라이브러리 버튼 핸들러");
  const addPlaylistBtnHandler = () => alert("내 플레이리스트에 추가");

  const addPlayQueueBtnHandler = () => {
    if (!data.Tracks) dispatch(concatenatePlayQueue(new Set(data)));
    else {
      const trackSet = new Set<Track>(data.Tracks);
      dispatch(concatenatePlayQueue(trackSet));
    }
  };

  return (
    <StyledEllipsis onClick={ellipsisHandler}>
      {icons.ellipsis}

      {isEllipsisOpen && <StyledOverlay onClick={overlayHandler} />}
      {isEllipsisOpen && (
        <StyledEllipsisModal>
          <div onClick={libraryBtnHandler}>보관함에 추가/삭제</div>
          <div onClick={addPlaylistBtnHandler}>내 플레이리스트에 추가</div>
          <div onClick={addPlayQueueBtnHandler}>재생목록에 추가</div>
        </StyledEllipsisModal>
      )}
    </StyledEllipsis>
  );
};

export default Ellipsis;
