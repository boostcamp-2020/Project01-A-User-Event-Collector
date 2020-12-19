import React, { FC, memo, useState, useEffect } from "react";
import Router from "next/router";
import Img from "../../Img";
import icons from "../../../constant/icons";
import myAxios from "../../../utils/myAxios";
import { StyledNavUser, StyledUser, StyledModal, StyledModalCard, StyledIcon } from "./styled";

interface Props {
  isLogged: boolean;
  setIsLogged: Function;
}

const defaultProfile =
  "https://www.nailseatowncouncil.gov.uk/wp-content/uploads/blank-profile-picture-973460_1280.jpg";

const defaultUserInfo = {
  userId: 0,
  username: "로그인",
  userProfile: defaultProfile,
};

interface Card {
  title: string;
  onClick?: Function;
}

const NavUserModal = ({ cards }: { cards: Card[] }): React.ReactElement => {
  return (
    <StyledModal>
      {cards.map((card) => {
        return (
          <StyledModalCard key={card.title} onClick={card.onClick}>
            {card.title}
          </StyledModalCard>
        );
      })}
    </StyledModal>
  );
};

const NavBarUser: FC<Props> = memo(({ isLogged, setIsLogged }: Props) => {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);
  const [showModal, setShowModal] = useState(false);

  const handleModal = (e: MouseEvent) => {
    setShowModal(!showModal);
  };

  const naverLoginURL = process.env.NEXT_PUBLIC_NAVER_LOGIN_URL || "today";
  useEffect(() => {
    if (!isLogged) {
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
          setIsLogged(true);
        })();
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log("No valid token");
      }
    }
  }, [isLogged]);

  const beforeLoggedInModalCards: Card[] = [
    {
      title: "NAVER 로그인",
      onClick: () => {
        Router.push(naverLoginURL);
      },
    },
    {
      title: "로컬 로그인",
      onClick: () => {
        Router.push("auth/login");
      },
    },
  ];

  const afterLoggedInModalCards: Card[] = [
    {
      title: "로그아웃",
      onClick: () => {
        localStorage.removeItem("token");
        setIsLogged(false);
      },
    },
  ];

  return (
    <>
      {isLogged ? (
        <StyledNavUser onClick={handleModal}>
          <Img varient="profile" src={userInfo.userProfile} />
          <StyledUser isLogged={isLogged}>
            {userInfo.username}
            <StyledIcon>{icons.sortDown}</StyledIcon>
          </StyledUser>
          {showModal ? <NavUserModal cards={afterLoggedInModalCards} /> : ""}
        </StyledNavUser>
      ) : (
        <StyledNavUser onClick={handleModal}>
          <Img varient="profile" src={defaultProfile} />
          <StyledUser isLogged={isLogged}>
            로그인<StyledIcon>{icons.sortDown}</StyledIcon>
          </StyledUser>
          {showModal ? <NavUserModal cards={beforeLoggedInModalCards} /> : ""}
        </StyledNavUser>
      )}
    </>
  );
});

export default NavBarUser;
