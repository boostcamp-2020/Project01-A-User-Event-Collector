import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { profile } from "console";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { code } = _req.query;
  const { state } = _req.query;
  const clientId = "_Zb3IXlIQbCuWqAQYSfU";
  const clientSecret = "1HyCoFA9lC";
  const redirectURI = encodeURI("http://localhost:3000/api/auth/naver");
  const accessTokenUrl = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectURI}&code=${code}&state=${state}`;

  const { data } = await axios.get(accessTokenUrl, { method: "GET" });

  const profileApiUrl = "https://openapi.naver.com/v1/nid/me";
  const result = await axios.get(profileApiUrl, {
    method: "GET",
    headers: { Authorization: `Bearer ${data.access_token}` },
  });
  res.json(result.data);
};

export default handler;
