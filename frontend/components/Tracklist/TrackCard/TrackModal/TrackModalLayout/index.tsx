import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  trackId: number;
}

const StyleTrackModalLayout = styled.div`
  position: absolute;
  right: 3rem;
  top: 0rem;

  width: 15rem;
  height: 8rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: gray;
  border-radius: 10px;
`;

const TrackModalLayout: FC<Props> = ({ trackId }) => {
  const likeButtonClick = () => {
    alert(`노래넘버 ${trackId}좋아요`);
  };
  const pushPlaylistButtonClick = () => {
    alert("내 플레이리스트에 추가");
  };
  const pushPlaybarButtonClick = () => {
    alert("재생목록에 추가");
  };
  return (
    <StyleTrackModalLayout>
      <div onClick={likeButtonClick}>좋아요</div>
      <div onClick={pushPlaylistButtonClick}>내 플레이리스트에 추가</div>
      <div onClick={pushPlaybarButtonClick}>재생목록에 추가</div>
    </StyleTrackModalLayout>
  );
};

export default TrackModalLayout;
