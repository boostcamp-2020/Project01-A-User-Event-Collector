import { Request, Response } from "express";
import { getWebLog, postWebLog } from "./web";
import { getiOSLog, postiOSLog } from "./iOS";

interface Controller {
  getWebLog(req: Request, res: Response): Promise<void>;
  getiOSLog(req: Request, res: Response): Promise<void>;
  postWebLog(req: Request, res: Response): Promise<void>;
  postiOSLog(req: Request, res: Response): Promise<void>;
}

const controller: Controller = {
  getWebLog,
  getiOSLog,
  postWebLog,
  postiOSLog,
};

export default controller;
