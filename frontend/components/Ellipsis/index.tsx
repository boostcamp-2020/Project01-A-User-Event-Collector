/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FC, useState } from "react";
import styled from "styled-components";
import icons from "../../constant/icons";

const StyledEllipsisWrapper = styled.div`
  position: absolute;
  font-size: 1rem;
  bottom: 7.5%;
  right: 2rem;
  color: #aaa;
  z-index: 600;
`;

const StyledEllipsis = styled.div`
  display: flex;
`;

const Ellipsis: FC<any> = () => {
  return (
    <StyledEllipsisWrapper>
      <StyledEllipsis>{icons.ellipsis}</StyledEllipsis>
    </StyledEllipsisWrapper>
  );
};

export default Ellipsis;
