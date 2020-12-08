import React, { FC, useEffect, useState, memo } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  pushCheckedTrack,
  removeCheckedTrack,
  CheckedTrack,
  allCheckTrack,
} from "../../../../reduxModules/checkedTrack";
import { RootState } from "../../../../reduxModules";

interface Props {
  trackData: CheckedTrack;
  listLength: number;
}

const StyleCheckBox = styled.div`
  padding: 10px;
`;

const checkLength = (base: CheckedTrack[], target: CheckedTrack, length: number) => {
  const tmp = new Set([...base, target]);
  return tmp.size === length;
};

const CheckBox: FC<Props> = ({ trackData, listLength }: Props) => {
  const { isAllChecked, checkedTrackArr } = useSelector((state: RootState) => state.checkedTrack);
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isChecked && !isAllChecked) {
      // if (checkLength(checkedTrackArr, trackData, listLength)) {
      //   dispatch(allCheckTrack([...checkedTrackArr, trackData], true));
      // } else {
      dispatch(pushCheckedTrack(trackData));
      // }
    }
    if (!isChecked) dispatch(removeCheckedTrack(trackData));
    // if (!(isChecked === isAllChecked)) {
    // if (checkedTrackArr.length === 1) {
    //   dispatch(allCheckTrack([]));
    //   console.log(3);
    // }
    // }

    // console.log(isAllChecked, isChecked);
  }, [isChecked]);

  useEffect(() => {
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
