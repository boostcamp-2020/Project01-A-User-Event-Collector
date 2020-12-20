import { Request, Response } from "express";
import signup from "./local/signup";
import login from "./local/login";
import naverOAuth from "./naver/callbackProcess";
import naverRedir from "./naver/redirection";

interface Auth {
  signup: (req: Request, res: Response) => Promise<Response>;
  login: (req: Request, res: Response) => Promise<Response>;
  naverCallback: (req: Request, res: Response) => Promise<void>;
  naverRedirection: (req: Request, res: Response) => void;
}

const authController: Auth = {
  signup,
  login,
  naverCallback: naverOAuth,
  naverRedirection: naverRedir,
};

export default authController;
