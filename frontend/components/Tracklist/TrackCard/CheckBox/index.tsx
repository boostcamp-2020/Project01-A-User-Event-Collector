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
}

const StyleCheckBox = styled.div`
  padding: 10px;
`;

const CheckBox: FC<Props> = ({ trackData }: Props) => {
  const isAllChecked = useSelector((state: RootState) => state.checkedTrack.isAllChecked);
  const [isChecked, setIsChecked] = useState(isAllChecked);
  const checkHandler = () => setIsChecked(!isChecked);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isChecked) dispatch(pushCheckedTrack(trackData));
    else dispatch(removeCheckedTrack(trackData));
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
