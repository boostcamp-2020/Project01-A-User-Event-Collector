import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

interface CookieOption extends Object {
  maxAge: number;
}

const cookie = (res: NextApiResponse, name: string, value: string, options: CookieOption): void => {
  res.setHeader("Set-Cookie", serialize(name, value, options));
};

const cookies = (handler: Function) => (req: NextApiRequest, res: NextApiResponse): Function => {
  res.cookie = (name: string, value: string, options: CookieOption) =>
    cookie(res, name, value, options);

  return handler(req, res);
};

export default cookies;
