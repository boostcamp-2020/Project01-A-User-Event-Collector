import axios from "axios";
import { Request, Response } from "express";
import { postUserInfo, getUserInfo } from "../../../../models/users";
import encodeJWT from "../../../../utils/encodeJWT";

const makeAccessTokenURL = (req: Request) => {
  const { code, state } = req.query;
  const clientId = process.env.NAVER_CLIENT_ID;
  const clientSecret = process.env.NAVER_CLIENT_SECRET;
  const redirectURI = encodeURI(process.env.NAVER_REDIRECT_URI || "");

  return `${process.env.NAVER_TOKEN_URL}?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectURI}&code=${code}&state=${state}`;
};

const getAccessToken = async (url: string) => {
  const { data } = await axios.get(url, { method: "GET" });
  return data;
};

const getNaverUserProfile = async (token: any) => {
  const profileApiUrl = process.env.NAVER_PROFILE_URL || "";
  const { data } = await axios.get(profileApiUrl, {
    method: "GET",
    headers: { Authorization: `Bearer ${token.access_token}` },
  });

  const profile = data.response;
  return {
    username: profile.email.split("@")[0],
    password: profile.id,
  };
};

const takeCallback = async (req: Request, res: Response): Promise<void> => {
  const accessTokenUrl = makeAccessTokenURL(req);
  const token = await getAccessToken(accessTokenUrl);
  const userData = await getNaverUserProfile(token);

  let loginResult: any = await getUserInfo(userData);
  if (!loginResult) {
    loginResult = await postUserInfo(userData);
  }

  const jwt = encodeJWT(loginResult);
  res.cookie("token", jwt, {
    maxAge: 1000000000,
    domain: process.env.COOKIE_DOMAIN,
    httpOnly: true,
    path: "/",
  });
  res.json({ result: "success", token: jwt });
};

export default takeCallback;
