import React, { memo, useState, useEffect } from "react";
import Link from "next/link";
import Img from "../../Img";
import myAxios from "../../../utils/myAxios";
import { StyledNavUser, StyledUser } from "./styled";
import asyncAxios from "../../../utils/asyncAxios";

const NavBarUser = memo(
  ({ loggedIn, setLoggedIn }: { loggedIn: boolean; setLoggedIn: Function }) => {
    const defaultID = 0;
    const defaultUsername = "로그인";
    const defaultProfile =
      "https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg";
    const [userID, setUserID] = useState(defaultID);
    const [username, setUsername] = useState(defaultUsername);
    const [userProfileCover, setUserProfileCover] = useState(defaultProfile);

    const naverLoginURL = process.env.NEXT_PUBLIC_NAVER_LOGIN_URL || "today";
    useEffect(() => {
      if (!loggedIn) {
        try {
          myAxios.get("/users/likedItem").then((res: any) => {
            localStorage.setItem("likedItem", JSON.stringify(res.data));
          });

          myAxios.get("/users/profile").then((data: any) => {
            const {
              data: { userProfile },
            } = data;
            setLoggedIn(true);
            localStorage.userProfile = JSON.stringify(userProfile);
            setUserID(userProfile.id);
            setUsername(userProfile.username);
            setUserProfileCover(userProfile.profile ? userProfile.profile : defaultProfile);
          });
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log("No valid token");
        }
      } else {
        setUserID(defaultID);
        setUsername(defaultUsername);
        setUserProfileCover(defaultProfile);
      }
    }, [loggedIn]);

    return (
      <>
        {loggedIn ? (
          <StyledNavUser>
            <Img varient="profile" src={userProfileCover} />
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
