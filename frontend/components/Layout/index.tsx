import React, { ReactNode, memo, useState, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { RootState } from "../../reduxModules";
import NavBar from "../NavBar";
import { Track } from "../../interfaces";
import SearchBar from "../SearchBar";
import Playbar from "./Playbar";
import { initCheckedTrack } from "../../reduxModules/checkedTrack";
import {
  StyledLayoutWrapper,
  StyledLayout,
  StyledContent,
  StyledSearchBar,
  StyledBlockingOverlay,
} from "./styled";
import PlaylistCheckBar from "./PlaylistCheckBar";

type Props = {
  children: ReactNode | undefined;
};

const Layout = memo(({ children }: Props) => {
  const [searchMode, setSearchMode] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const { checkedTracks }: { checkedTracks: Set<Track> } = useSelector(
    (state: RootState) => state.checkedTracks,
  );

  const dispatch = useDispatch();

  Router.events.on("routeChangeStart", async () => {
    setSearchMode(false);
    dispatch(initCheckedTrack());
    checkedTracks.clear();
  });

  const handleShowPlaylist = (e: MouseEvent): void => {
    setShowPlaylist(!showPlaylist);
  };

  const handleSearch = (): void => setSearchMode(!searchMode);

  const closeSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" || e.key === "Esc") {
      handleSearch();
    }
  };

  return (
    <StyledLayoutWrapper onKeyDown={closeSearch}>
      <StyledLayout>
        {checkedTracks.size !== 0 ? <PlaylistCheckBar /> : ""}
        <NavBar handleSearch={handleSearch} />
        {searchMode && (
          <StyledSearchBar>
            <SearchBar handleSearch={handleSearch} />
          </StyledSearchBar>
        )}
        <StyledContent>{children}</StyledContent>
      </StyledLayout>
      <Playbar />
    </StyledLayoutWrapper>
  );
});

export default Layout;
