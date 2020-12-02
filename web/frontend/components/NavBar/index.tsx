import React, { memo } from "react";
import LinkCardBlock from "../LinkCardBlock";
import StyledNavBar from "./styled";

export enum Theme {
  Main = "main",
  Library = "library",
}

const NavBar = memo(() => {
  return (
    <StyledNavBar>
      <LinkCardBlock theme={Theme.Main} />
      <LinkCardBlock theme={Theme.Library} />
    </StyledNavBar>
  );
});

export default NavBar;
