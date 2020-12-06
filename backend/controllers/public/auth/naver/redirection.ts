import { Request, Response } from "express";

const naverRedirect = (req: Request, res: Response): void => {
  const naverUrl: string = process.env.NAVER_LOGIN_URL || "/";
  res.redirect(naverUrl);
};

export default naverRedirect;
