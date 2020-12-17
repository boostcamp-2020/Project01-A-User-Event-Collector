import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Album, Artist, Playlist, Track } from "../../interfaces";
import { concatenatePlayQueue } from "../../reduxModules/playQueue";

const StyledHiddenModal = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const StyledEllipsisModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -4.75rem;
  right: 2rem;
  width: 12rem;
  border-radius: 0.25rem;
  background-color: #ffffff;
  color: #000;
  padding: 0.5rem 0rem;
  font-size: 0.8rem;
  border: 0.1rem solid #ddd;
  z-index: 401;
`;

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0rem 1rem;
  height: 1.75rem;
  &:hover {
    background-color: #ccc;
  }
`;

interface Props {
  type: "track" | "album" | "artist" | "playlist";
  data: Track | Album | Artist | Playlist;
}

const EllipsisModal = ({ type, data }: any): React.ReactElement => {
  const dispatch = useDispatch();

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
    <StyledHiddenModal>
      <StyledEllipsisModal>
        <StyledOption onClick={libraryBtnHandler}>보관함에 추가/삭제</StyledOption>
        <StyledOption onClick={addPlaylistBtnHandler}>내 플레이리스트에 추가</StyledOption>
        <StyledOption onClick={addPlayQueueBtnHandler}>재생목록에 추가</StyledOption>
      </StyledEllipsisModal>
    </StyledHiddenModal>
  );
};

export default EllipsisModal;
