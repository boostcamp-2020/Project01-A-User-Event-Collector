import * as React from "react";
import {
  StyledSearchBar,
  StyledSearchIcon,
  StyledSearchInput,
  StyledClosingIcon,
  StyledText,
} from "./styled";
import icons from "../../constant/icons";

const SearchBar = (): any => {
  return (
    <StyledSearchBar>
      <StyledSearchIcon>
        <StyledText>{icons.search}</StyledText>
      </StyledSearchIcon>
      <StyledSearchInput placeholder="VIBE 검색" />
      <StyledClosingIcon>
        <StyledText>{icons.x}</StyledText>
      </StyledClosingIcon>
    </StyledSearchBar>
  );
};

export default SearchBar;
