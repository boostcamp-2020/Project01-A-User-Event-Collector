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
  trackListLength: number;
}

const StyleCheckBox = styled.div`
  padding: 10px;
`;

const CheckBox: FC<Props> = ({ trackData, trackListLength }: Props) => {
  const { isAllChecked, checkedTrackArr } = useSelector((state: RootState) => state.checkedTrack);
  const [isChecked, setIsChecked] = useState(isAllChecked);
  const checkHandler = () => setIsChecked(!isChecked);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isChecked) dispatch(pushCheckedTrack(trackData));
    else dispatch(removeCheckedTrack(trackData));

    if (checkedTrackArr.length + 1 === trackListLength)
      dispatch(allCheckTrack([...checkedTrackArr, trackData]));
  }, [isChecked]);

  useEffect(() => {
    setIsChecked(isAllChecked);
  }, [isAllChecked]);

  return (
    <StyleCheckBox>
      <input type="checkbox" checked={isChecked} onChange={checkHandler} />
    </StyleCheckBox>
  );
};

export default CheckBox;
