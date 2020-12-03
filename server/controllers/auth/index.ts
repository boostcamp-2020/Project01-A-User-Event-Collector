import { Request, Response } from "express";
import axios from "axios";
import { postUserInfo, getUserInfo } from "../../models/users";
// import cookies from "../../utils/cookies";
import encodeJWT from "../../utils/encodeJWT";

const test = async (req: Request, res: Response): Promise<void> => {
  console.log("컨트롤 가져오자");
  const { code } = req.query;
  const { state } = req.query;
  const clientId = process.env.NAVER_CLIENT_ID;
  const clientSecret = process.env.NAVER_CLIENT_SECRET;
  const redirectURI = encodeURI(process.env.NAVER_REDIRECT_URI || "");
  const accessTokenUrl = `${process.env.NAVER_TOKEN_URL}?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectURI}&code=${code}&state=${state}`;
  const { data } = await axios.get(accessTokenUrl, { method: "GET" });

  const profileApiUrl = process.env.NAVER_PROFILE_URL || "";
  const {
    data: { response: profile },
  } = await axios.get(profileApiUrl, {
    method: "GET",
    headers: { Authorization: `Bearer ${data.access_token}` },
  });

  const userData = {
    username: profile.email.split("@")[0],
    password: profile.id,
  };
  let loginResult: any = await getUserInfo(userData);
  if (!loginResult) {
    loginResult = await postUserInfo(userData);
  }
  const jwt = encodeJWT(loginResult);

  res.cookie("token", jwt, {
    maxAge: 200000,
    domain: process.env.COOKIE_DOMAIN,
    path: "/",
  });
  res.redirect("http://localhost:3000/");
};

export default test;
