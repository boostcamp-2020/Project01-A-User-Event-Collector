import React, { useState } from "react";
import Router from "next/router";
import {
  StyledSearchBar,
  StyledSearchIcon,
  StyledSearchInput,
  StyledClosingIcon,
  StyledText,
} from "./styled";
import icons from "../../constant/icons";

const SearchBar = ({ handleSearch }: { handleSearch: () => void }): React.ReactElement => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (e: React.FormEvent<HTMLInputElement>) =>
    setSearchValue(e.currentTarget.value);
  const doSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      Router.push(`/search?filter=${searchValue}`);
      handleSearch();
    }
  };

  return (
    <StyledSearchBar>
      <StyledSearchIcon>
        <StyledText onClick={handleSearch}>{icons.search}</StyledText>
      </StyledSearchIcon>
      <StyledSearchInput
        placeholder="VIBE 검색"
        value={searchValue}
        onChange={handleSearchValue}
        onKeyPress={doSearch}
      />
      <StyledClosingIcon>
        <StyledText onClick={handleSearch}>{icons.x}</StyledText>
      </StyledClosingIcon>
    </StyledSearchBar>
  );
};

export default SearchBar;
