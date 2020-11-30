import { NextApiResponse } from "next";

interface NextApiResponseWithCookie extends NextApiResponse {
  cookie: Function;
}

export default NextApiResponseWithCookie;
