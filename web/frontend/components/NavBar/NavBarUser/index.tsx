import React, { memo } from "react";
import Img from "../../Img";
import { StyledNavUser, StyledUser } from "./styled";

const NavBarUser = memo(() => {
  const srcProfile = "https://i.ytimg.com/vi/gAe8WUPYvI0/maxresdefault.jpg";
  const username = "우기팬";

  return (
    <StyledNavUser>
      <Img varient="profile" src={srcProfile} />
      <StyledUser>{username}</StyledUser>
    </StyledNavUser>
  );
});

export default NavBarUser;
