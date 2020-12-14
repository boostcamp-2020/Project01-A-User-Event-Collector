import React, { memo, useState, useEffect } from "react";
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

    useEffect(() => {
      const test = localStorage.getItem("token");

      // 물론 토큰 파싱해야겠지만
      if (test) setLoggedIn(true);
    }, []);

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
