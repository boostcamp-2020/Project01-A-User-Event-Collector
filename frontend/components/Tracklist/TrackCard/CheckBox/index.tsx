import React, { FC, useEffect, useState, memo } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  pushCheckedTrack,
  removeCheckedTrack,
  CheckedTrack,
} from "../../../../reduxModules/checkedTrack";

interface Props {
  trackData: CheckedTrack;
}

const StyleCheckBox = styled.div`
  padding: 10px;
`;

const CheckBox: FC<Props> = memo(({ trackData }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => setIsChecked(!isChecked);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isChecked) dispatch(pushCheckedTrack(trackData));
    else dispatch(removeCheckedTrack(trackData));
  }, [isChecked]);

  return (
    <StyleCheckBox>
      <input type="checkbox" onChange={checkHandler} />
    </StyleCheckBox>
  );
});

export default CheckBox;
