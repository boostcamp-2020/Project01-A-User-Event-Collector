import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Album, Artist } from "../../../../interfaces";

interface TrackData {
  id: number;
  trackName: string;
  Albums: Album;
  Artists: Artist[];
}

interface Props {
  trackData: TrackData;
}

const StyleCheckBox = styled.div`
  padding: 10px;
`;

const CheckBox: FC<Props> = ({ trackData }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => setIsChecked(!isChecked);

  useEffect(() => {
    if (isChecked) console.log(trackData);
  }, [isChecked]);

  return (
    <StyleCheckBox>
      <input type="checkbox" onChange={checkHandler} />
    </StyleCheckBox>
  );
};

export default CheckBox;
