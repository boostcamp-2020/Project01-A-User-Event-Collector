import React, { memo } from "react";
import { useRouter } from "next/router";
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
      <StyledNavSearch>돋</StyledNavSearch>
    </StyledNavTopLogoSearch>
  );
});

export default NavTopLogoSearch;
