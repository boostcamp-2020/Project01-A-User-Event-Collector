import { NextApiRequest } from "next";
import { serialize } from "cookie";
import NextApiResponseWithCookie from "../interfaces/NextApiResponseWithCookie";

interface CookieOption extends Object {
  maxAge: number;
  domain: string;
}

const cookie = (
  res: NextApiResponseWithCookie,
  name: string,
  value: string,
  options: CookieOption,
): void => {
  res.setHeader("Set-Cookie", serialize(name, value, options));
};

const cookies = (handler: Function) => (
  req: NextApiRequest,
  res: NextApiResponseWithCookie,
): Function => {
  res.cookie = (name: string, value: string, options: CookieOption) =>
    cookie(res, name, value, options);

  return handler(req, res);
};

export default cookies;
