import React, { FC, useEffect, useState, memo } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  pushCheckedTrack,
  removeCheckedTrack,
  CheckedTrack,
} from "../../../../reduxModules/checkedTrack";
import { RootState } from "../../../../reduxModules";
import { preventEffect } from "../../../../reduxModules/allCheck";

interface Props {
  trackData: CheckedTrack;
  listLength: number;
}

const StyleCheckBox = styled.div`
  padding: 10px;
`;

const checkLength = (base: CheckedTrack[], target: CheckedTrack, length: number) => {
  const tmp = new Set([...base, target]);
  return tmp.size >= length;
};

const CheckBox: FC<Props> = ({ trackData, listLength }: Props) => {
  const checkedTrackArr = useSelector((state: RootState) => state.checkedTrack);
  const { isAllChecked, preventBubbling } = useSelector((state: RootState) => state.AllCheckedFlag);
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isChecked) {
      if (!isAllChecked && checkLength(checkedTrackArr, trackData, listLength))
        dispatch(preventEffect({ isAllChecked: true }));
      dispatch(pushCheckedTrack(trackData));
    }

    if (!isChecked) {
      if (isAllChecked) dispatch(preventEffect({ isAllChecked: false }));
      dispatch(removeCheckedTrack(trackData));
    }
  }, [isChecked]);

  useEffect(() => {
    if (preventBubbling) return;
    setIsChecked(isAllChecked);
  }, [isAllChecked]);

  const checkHandler = () => setIsChecked(!isChecked);

  return (
    <StyleCheckBox>
      <input type="checkbox" checked={isChecked} onChange={checkHandler} />
    </StyleCheckBox>
  );
};

export default CheckBox;
