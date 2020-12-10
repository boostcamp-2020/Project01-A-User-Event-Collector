import { Request, Response } from "express";
import postWebLog from "./web";
import postiOSLog from "./iOS";

interface Controller {
  postWebLog(req: Request, res: Response): Promise<void>;
  postiOSLog(req: Request, res: Response): Promise<void>;
}

const controller: Controller = {
  postWebLog,
  postiOSLog,
};

export default controller;
