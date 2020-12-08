import React, { FC } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Track } from "../../../interfaces";
import { allCheckTrack } from "../../../reduxModules/checkedTrack";
import { RootState } from "../../../reduxModules";
// import Modal from "../../Modal";

interface Props {
  parentId: number;
  tracks: Track[];
}

const StyleButtonBox = styled.div`
  display: flex;
`;

// parentId will be used for Like Button
const ButtonBox: FC<Props> = ({ parentId, tracks }: Props) => {
  const isAllChecked = useSelector((state: RootState) => state.checkedTrack.isAllChecked);
  const dispatch = useDispatch();

  // console.log("??", isAllChecked);

  const allCheckHandler = () => {
    console.log(isAllChecked, "->", !isAllChecked);
    if (!isAllChecked) dispatch(allCheckTrack(tracks));
    else dispatch(allCheckTrack([]));
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
