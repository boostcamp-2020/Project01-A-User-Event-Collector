import React, { FC, useState } from "react";
import styled from "styled-components";
import TrackModalLayout from "./TrackModalLayout";

interface Props {
  trackId: number;
}

const StyleModal = styled.div`
  position: relative;
`;

const TrackModal: FC<Props> = ({ trackId }) => {
  const [isClicked, setIsClicked] = useState(false);
  const ShowLayout = () => {
    setIsClicked(!isClicked);
  };

  return (
    <StyleModal>
      <span onClick={ShowLayout}> Click </span>
      {isClicked && <TrackModalLayout trackId={trackId} />}
    </StyleModal>
  );
};

export default TrackModal;
