import React, { memo, useState, useEffect } from "react";
import Link from "next/link";
import Img from "../../Img";
import myAxios from "../../../utils/myAxios";
import { StyledNavUser, StyledUser } from "./styled";

const defaultProfile =
  "https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg";
const defaultUserInfo = {
  userId: 0,
  username: "로그인",
  userProfile: defaultProfile,
};

const NavBarUser = memo(
  ({ loggedIn, setLoggedIn }: { loggedIn: boolean; setLoggedIn: Function }) => {
    const [userInfo, setUserInfo] = useState(defaultUserInfo);

    const naverLoginURL = process.env.NEXT_PUBLIC_NAVER_LOGIN_URL || "today";
    useEffect(() => {
      if (!loggedIn) {
        try {
          (async () => {
            const response: any = await Promise.all([
              myAxios.get("/users/likedItem"),
              myAxios.get("/users/profile"),
            ]);

            const { data: likedData }: any = response[0];
            const { data: userData }: any = response[1];
            const { userProfile } = userData;

            localStorage.setItem("likedItem", JSON.stringify(likedData));
            localStorage.setItem("userProfile", JSON.stringify(userProfile));

            setUserInfo({
              userId: userProfile.id,
              username: userProfile.username,
              userProfile: userProfile.profile || defaultProfile,
            });
            setLoggedIn(true);
          })();
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log("No valid token");
        }
      }
    }, [loggedIn]);

    return (
      <>
        {loggedIn ? (
          <StyledNavUser>
            <Img varient="profile" src={userInfo.userProfile} />
            <StyledUser loggedIn={loggedIn}>{userInfo.username}</StyledUser>
          </StyledNavUser>
        ) : (
          <Link href={naverLoginURL}>
            <StyledNavUser>
              <Img varient="profile" src={defaultProfile} />
              <StyledUser loggedIn={loggedIn}>로그인</StyledUser>
            </StyledNavUser>
          </Link>
        )}
      </>
    );
  },
);

export default NavBarUser;
