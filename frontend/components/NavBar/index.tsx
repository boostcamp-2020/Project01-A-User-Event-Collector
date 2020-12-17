import React, { FC, memo, useState, useEffect } from "react";
import LinkCardBlock from "./LinkCardBlock";
import NavTopLogoSearch from "./NavTopLogoSearch";
import NavBarUser from "./NavBarUser";
import { StyledNavBar, StyledLibrary, StyledLibraryText } from "./styled";

interface Props {
  handleSearch: () => void;
}

export enum Theme {
  Main = "main",
  Library = "library",
}

const NavBar: FC<Props> = memo(({ handleSearch }: Props) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    localStorage.getItem("token");
  }, []);

  return (
    <StyledNavBar>
      <NavTopLogoSearch handleSearch={handleSearch} />
      <NavBarUser isLogged={isLogged} setIsLogged={setIsLogged} />
      <LinkCardBlock theme={Theme.Main} />

      {isLogged && (
        <StyledLibrary>
          <StyledLibraryText>보관함</StyledLibraryText>
          <LinkCardBlock theme={Theme.Library} />
        </StyledLibrary>
      )}
    </StyledNavBar>
  );
});

export default NavBar;
