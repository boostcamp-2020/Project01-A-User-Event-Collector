import React, { memo } from "react";
import LinkCardBlock from "../LinkCardBlock";
import NavTopLogoSearch from "./NavTopLogoSearch";
import NavBarUser from "../NavBarUser";
import StyledNavBar from "./styled";

export enum Theme {
  Main = "main",
  Library = "library",
}

const NavBar = memo(() => {
  return (
    <StyledNavBar>
      <NavTopLogoSearch />
      <NavBarUser />
      <LinkCardBlock theme={Theme.Main} />
      <LinkCardBlock theme={Theme.Library} />
    </StyledNavBar>
  );
});

export default NavBar;
