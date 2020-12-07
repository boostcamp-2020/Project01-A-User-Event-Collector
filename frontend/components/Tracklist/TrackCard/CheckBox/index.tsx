import React, { FC, useState } from "react";
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
  const test = () => console.log(trackData);
  return (
    <StyleCheckBox>
      <input type="checkbox" onChange={test} />
    </StyleCheckBox>
  );
};

export default CheckBox;
