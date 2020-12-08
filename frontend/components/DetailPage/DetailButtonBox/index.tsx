import React, { FC } from "react";
import styled from "styled-components";
import { Track } from "../../../interfaces";

// import Modal from "../../Modal";

interface Props {
  parentId: number;
  tracks: Track[];
}

const StyleButtonBox = styled.div`
  display: flex;
`;

const ButtonBox: FC<Props> = ({ parentId, tracks }: Props) => {
  const allCheckHandler = () => {
    console.log("test");
  };

  return (
    <StyleButtonBox>
      <button type="button">전체재생</button>
      <button type="button">좋아요</button>
      <button type="button" onClick={allCheckHandler}>
        전체선택
      </button>
      <button type="button">모달</button>
      {/* <Modal>ASDASD</Modal> */}
    </StyleButtonBox>
  );
};

export default ButtonBox;
