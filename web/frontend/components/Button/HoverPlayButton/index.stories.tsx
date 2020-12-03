import React from "react";
import HoverPlayButton, { StyledPlayButton } from ".";
import { PlaySvg } from "../../../utils/svg";

export default {
  title: "PlayButton",
  component: HoverPlayButton,
};

export const PlayButton: React.FC = () => {
  return (
    <StyledPlayButton>
      <PlaySvg />
    </StyledPlayButton>
  );
};
