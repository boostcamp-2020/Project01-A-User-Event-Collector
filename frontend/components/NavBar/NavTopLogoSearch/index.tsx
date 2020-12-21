import React, { memo } from "react";
import { useRouter } from "next/router";
import icons from "../../../constant/icons";
import {
  StyledNavTopLogoSearch,
  StyledNavLogo,
  StyledNavVIBE,
  StyledWith,
  StyledNavDIVE,
  StyledNavSearch,
} from "./styled";

const NavTopLogoSearch = memo(
  ({ handleSearch }: { handleSearch: () => void }): React.ReactElement => {
    const router = useRouter();

    return (
      <StyledNavTopLogoSearch>
        <StyledNavLogo onClick={() => router.push("/today")}>
          <StyledNavVIBE>VIBE</StyledNavVIBE>
          <StyledWith>with</StyledWith>
          <StyledNavDIVE>DIVE</StyledNavDIVE>
        </StyledNavLogo>
        <StyledNavSearch onClick={handleSearch}>{icons.search}</StyledNavSearch>
      </StyledNavTopLogoSearch>
    );
  },
);

export default NavTopLogoSearch;
