import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { postUserInfo, getUserInfo } from "../../../../backend/models/users";
import createJWT from "../../../../backend/utils/createJWT";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { code } = _req.query;
  const { state } = _req.query;
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

  res.redirect(`/?token=${createJWT(loginResult)}`);
};

export default handler;
