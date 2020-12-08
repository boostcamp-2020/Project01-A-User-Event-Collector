import React, { ReactNode, memo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
import Playbar from "../Playbar";
import { StyledLayout, StyledSearchBar, StyledContent } from "./styled";
import { initCheckedTrack } from "../../reduxModules/checkedTrack";

type Props = {
  children: ReactNode | undefined;
};

const Layout = memo(({ children }: Props) => {
  const [searchMode, setSearchMode] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCheckedTrack());
  }, [router.pathname]);
  const handleSearch = (): void => setSearchMode(!searchMode);

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
