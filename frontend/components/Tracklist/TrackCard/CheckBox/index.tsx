import React, { FC, useEffect, useState, memo } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  pushCheckedTrack,
  removeCheckedTrack,
  CheckedTrack,
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
  const checkedTrackArr = useSelector((state: RootState) => state.checkedTrack);
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isChecked) {
      // if (checkLength(checkedTrackArr, trackData, listLength))
      // dispatch(allCheckTrack([...checkedTrackArr, trackData], true));
      dispatch(pushCheckedTrack(trackData));
    } else if (!isChecked) {
      // if (isAllChecked) {
      //   console.log("asdasdasdasd");
      //   dispatch(allCheckTrack([...checkedTrackArr, trackData], false));
      // } else
      dispatch(removeCheckedTrack(trackData));
    }
  }, [isChecked]);

  // useEffect(() => {
  //   console.log("변화");
  //   if (checkedTrackArr.length > 0 && !isAllChecked) return;
  //   setIsChecked(isAllChecked);
  // }, [isAllChecked]);

  const checkHandler = () => setIsChecked(!isChecked);
  return (
    <StyleCheckBox>
      <input type="checkbox" checked={isChecked} onChange={checkHandler} />
    </StyleCheckBox>
  );
};

export default CheckBox;
