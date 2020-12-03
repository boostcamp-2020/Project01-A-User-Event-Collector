import React, { memo } from "react";
import StyledPlaybar from "./styled";

const Playbar = memo(() => {
  return (
    <StyledPlaybar controls>
      <track kind="captions" />
      <source src="test.mp3" type="audio/mp3" />
    </StyledPlaybar>
  );
});

export default Playbar;
