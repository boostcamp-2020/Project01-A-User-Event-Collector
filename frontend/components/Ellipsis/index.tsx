import React, { FC, useState } from "react";
import styled from "styled-components";

const RelativeEmptyDiv = styled.div`
  position: relative;
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

const StyledEllipsis = styled.div`
  position: absolute;
  z-index: 2000;
  top: 20px;
  background-color: gray;
  padding: 10px;
  border-radius: 10px;
  font-size: 17px;
`;

const Ellipsis: FC<any> = () => {
  const [isEllipsisOpen, setIsEllipsisOpen] = useState(false);

  const ellipsisHandler = () => setIsEllipsisOpen(!isEllipsisOpen);
  const overlayHandler = () => setIsEllipsisOpen(false);

  const libraryBtnHandler = () => alert("라이브러리 버튼 핸들러");

  const addPlaylistBtnHandler = () => alert("플레이 리스트에 추가");

  const addPlayQueueBtnHandler = () => alert("재생목록에 추가");

  return (
    <>
      <RelativeEmptyDiv onClick={ellipsisHandler}>
        <div>Ellipsis Button</div>

        {isEllipsisOpen && <StyledOverlay onClick={overlayHandler} />}
        {isEllipsisOpen && (
          <StyledEllipsis>
            <div onClick={libraryBtnHandler}>보관함에 추가/삭제</div>
            <div onClick={addPlaylistBtnHandler}>내 플레이리스트에 추가</div>
            <div onClick={addPlayQueueBtnHandler}>재생목록에 추가</div>
          </StyledEllipsis>
        )}
      </RelativeEmptyDiv>
    </>
  );
};

export default Ellipsis;
