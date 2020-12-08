import React, { FC, useEffect, useState } from "react";
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

const CheckBox: FC<Props> = ({ trackData }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => setIsChecked(!isChecked);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isChecked) dispatch(pushTrack(trackData));
    else dispatch(removeTrack(trackData));

    console.log(useSelector((state: RootState) => state));
  }, [isChecked]);

  return (
    <StyleCheckBox>
      <input type="checkbox" onChange={checkHandler} />
    </StyleCheckBox>
  );
};

export default CheckBox;
