import React, { memo, useState, useEffect } from "react";
import Link from "next/link";
import Img from "../../Img";
import myAxios from "../../../utils/myAxios";
import { StyledNavUser, StyledUser } from "./styled";

const NavBarUser = memo(
  ({ loggedIn, setLoggedIn }: { loggedIn: boolean; setLoggedIn: Function }) => {
    const defaultID = 0;
    const defaultUsername = "로그인";
    const defaultProfile =
      "https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg";
    const naverLoginURL = process.env.NEXT_PUBLIC_NAVER_LOGIN_URL || "today";

    const [userID, setUserID] = useState(defaultID);
    const [username, setUsername] = useState(defaultUsername);
    const [userProfile, setUserProfile] = useState(defaultProfile);
    useEffect(() => {
      if (!loggedIn) {
        try {
          myAxios.get("/private/auth/userinfo").then((data: any) => {
            const {
              data: { user },
            } = data;
            setLoggedIn(true);
            setUserID(user.id);
            setUsername(user.username);
            setUserProfile(user.profile);
          });
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log("No valid token");
        }
      } else {
        setUserID(defaultID);
        setUsername(defaultUsername);
        setUserProfile(defaultProfile);
      }
    }, [loggedIn]);

    return (
      <>
        {loggedIn ? (
          <StyledNavUser>
            <Img varient="profile" src={userProfile} />
            <StyledUser loggedIn={loggedIn}>{username}</StyledUser>
          </StyledNavUser>
        ) : (
          <Link href={naverLoginURL}>
            <StyledNavUser>
              <Img varient="profile" src={defaultProfile} />
              <StyledUser loggedIn={loggedIn}>{defaultUsername}</StyledUser>
            </StyledNavUser>
          </Link>
        )}
      </>
    );
  },
);

export default NavBarUser;
