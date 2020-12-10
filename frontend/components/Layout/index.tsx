import React, { ReactNode, memo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
import Playbar from "../Playbar";
import { initCheckedTrack } from "../../reduxModules/checkedTrack";
import {
  StyledLayoutWrapper,
  StyledLayout,
  StyledContent,
  StyledSearchBar,
  StyledBlockingOverlay,
} from "./styled";
import Overlay from "./Overlay";
import PlaylistCheckBar from "./PlaylistCheckBar";

type Props = {
  children: ReactNode | undefined;
};

interface Track {
  id: number;
  trackName: string;
  albumTrackNumber: number;
  albumId: number;
  Albums: {
    cover: string;
    albumName: string;
  };
  Artists_Tracks: {
    id: number;
    trackId: number;
    artistId: number;
    Artists: {
      artistName: string;
    };
  }[];
}

const Layout = memo(({ children }: Props) => {
  const [searchMode, setSearchMode] = useState(false);
  const [checkMode, setCheckMode] = useState(false);

  const [showPlaylist, setShowPlaylist] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCheckedTrack());
  }, [router.pathname]);

  const handleSearch = (): void => setSearchMode(!searchMode);
  const handleShowPlaylist = () => setShowPlaylist(!showPlaylist);
  const handleCheckMode = () => setCheckMode(!checkMode);

  const closeSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" || e.key === "Esc") {
      handleSearch();
    }
  };

  return (
    <StyledLayoutWrapper onKeyDown={closeSearch}>
      <StyledLayout>
        {checkMode ? <PlaylistCheckBar /> : ""}
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
      {showPlaylist ? (
        <>
          <StyledBlockingOverlay />
          <Overlay />
        </>
      ) : (
        ""
      )}
      <Playbar handleShowPlaylist={handleShowPlaylist} showPlaylist={showPlaylist} />
    </StyledLayoutWrapper>
  );
});

export default Layout;
