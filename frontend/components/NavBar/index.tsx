import React, { memo, useState } from "react";
import LinkCardBlock from "./LinkCardBlock";
import NavTopLogoSearch from "./NavTopLogoSearch";
import NavBarUser from "./NavBarUser";
import StyledNavBar from "./styled";

export enum Theme {
  Main = "main",
  Library = "library",
}

const NavBar = memo(() => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <StyledNavBar>
      <NavTopLogoSearch />
      <NavBarUser loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <LinkCardBlock theme={Theme.Main} />
      {loggedIn ? <LinkCardBlock theme={Theme.Library} /> : ""}
    </StyledNavBar>
  );
});

export default NavBar;
