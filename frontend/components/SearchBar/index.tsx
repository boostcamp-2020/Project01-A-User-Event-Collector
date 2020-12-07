import * as React from "react";
import {
  StyledSearchBar,
  StyledSearchIcon,
  StyledSearchInput,
  StyledClosingIcon,
  StyledText,
} from "./styled";
import icons from "../../constant/icons";

const SearchBar = ({ handleSearch }: { handleSearch: () => void }): React.ReactElement => {
  return (
    <StyledSearchBar>
      <StyledSearchIcon>
        <StyledText onClick={handleSearch}>{icons.search}</StyledText>
      </StyledSearchIcon>
      <StyledSearchInput placeholder="VIBE 검색" />
      <StyledClosingIcon>
        <StyledText onClick={handleSearch}>{icons.x}</StyledText>
      </StyledClosingIcon>
    </StyledSearchBar>
  );
};

export default SearchBar;
