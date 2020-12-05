import React, { memo } from "react";
import StyledPlaybar from "./styled";

const Playbar = memo(() => {
  return (
    <StyledPlaybar>
      <div>playbar</div>
      <div>playbar</div>
      <div>playbar</div>
      <div>playbar</div>
    </StyledPlaybar>
  );
});

export default Playbar;
