import React, { memo } from "react";
import { useRouter } from "next/router";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  StyledNavTopLogoSearch,
  StyledNavLogo,
  StyledNavNaver,
  StyledNavVibe,
  StyledNavSearch,
} from "./styled";

const NavTopLogoSearch = memo(() => {
  const router = useRouter();

  return (
    <StyledNavTopLogoSearch>
      <StyledNavLogo onClick={() => router.push("/today")}>
        <StyledNavNaver>NAVER</StyledNavNaver>
        <StyledNavVibe>Vibe</StyledNavVibe>
      </StyledNavLogo>
      <StyledNavSearch>
        <FontAwesomeIcon icon={faSearch} />
      </StyledNavSearch>
    </StyledNavTopLogoSearch>
  );
});

export default NavTopLogoSearch;
