import React, { memo, useState } from "react";
import LinkCardBlock from "./LinkCardBlock";
import NavTopLogoSearch from "./NavTopLogoSearch";
import NavBarUser from "./NavBarUser";
import { StyledNavBar, StyledLibrary, StyledLibraryText } from "./styled";

export enum Theme {
  Main = "main",
  Library = "library",
}

const NavBar = memo(
  ({ handleSearch }: { handleSearch: () => void }): React.ReactElement => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
      <StyledNavBar>
        <NavTopLogoSearch handleSearch={handleSearch} />
        <NavBarUser loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <LinkCardBlock theme={Theme.Main} />
        {loggedIn ? (
          <StyledLibrary>
            <StyledLibraryText>보관함</StyledLibraryText>
            <LinkCardBlock theme={Theme.Library} />
          </StyledLibrary>
        ) : (
          ""
        )}
      </StyledNavBar>
    );
  },
);

export default NavBar;
