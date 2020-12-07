import React, { ReactNode, memo } from "react";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
import Playbar from "../Playbar";
import { StyledLayout, StyledSearchBar, StyledContent } from "./styled";

type Props = {
  children: ReactNode | undefined;
};

const Layout = memo(({ children }: Props) => (
  <div>
    <StyledLayout>
      <NavBar />
      <StyledSearchBar>
        <SearchBar />
      </StyledSearchBar>
      <StyledContent>{children}</StyledContent>
    </StyledLayout>
    <Playbar />
  </div>
));

export default Layout;
