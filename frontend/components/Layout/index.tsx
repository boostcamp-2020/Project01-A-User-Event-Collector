import React, { ReactNode, memo, useState } from "react";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
import Playbar from "../Playbar";
import { StyledLayout, StyledSearchBar, StyledContent } from "./styled";

type Props = {
  children: ReactNode | undefined;
};

const Layout = memo(({ children }: Props) => {
  const [searchMode, setSearchMode] = useState(false);
  const handleSearch = (): void => {
    setSearchMode(!searchMode);
  };

  return (
    <div>
      <StyledLayout>
        <NavBar handleSearch={handleSearch} />
        {searchMode ? (
          <StyledSearchBar>
            <SearchBar handleSearch={handleSearch} />
          </StyledSearchBar>
        ) : (
          ""
        )}
        <StyledContent>{children}</StyledContent>
      </StyledLayout>
      <Playbar />
    </div>
  );
});

export default Layout;
