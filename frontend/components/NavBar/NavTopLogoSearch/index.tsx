import React, { memo } from "react";
import { useRouter } from "next/router";
import icons from "../../../constant/icons";
import {
  StyledNavTopLogoSearch,
  StyledNavLogo,
  StyledNavNaver,
  StyledNavVibe,
  StyledNavSearch,
} from "./styled";

const NavTopLogoSearch = memo(
  ({ handleSearch }: { handleSearch: () => void }): React.ReactElement => {
    const router = useRouter();

    return (
      <StyledNavTopLogoSearch>
        <StyledNavLogo onClick={() => router.push("/today")}>
          <StyledNavNaver>NAVER</StyledNavNaver>
          <StyledNavVibe>VIBE</StyledNavVibe>
        </StyledNavLogo>
        <StyledNavSearch onClick={handleSearch}>{icons.search}</StyledNavSearch>
      </StyledNavTopLogoSearch>
    );
  },
);

export default NavTopLogoSearch;
