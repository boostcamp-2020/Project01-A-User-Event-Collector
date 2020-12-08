import React, { FC, useEffect, useState, memo } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { pushTrack, removeTrack, CheckedTrack } from "../../../../reduxModules/checkedTrack";
import { RootState } from "../../../../reduxModules";

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
  const data = useSelector((state: RootState) => state.chekdTrack);

  useEffect(() => {
    if (isChecked) dispatch(pushTrack(trackData));
    else dispatch(removeTrack(trackData));
  }, [isChecked]);

  return (
    <StyleCheckBox>
      <input type="checkbox" onChange={checkHandler} />
    </StyleCheckBox>
  );
});

export default CheckBox;
