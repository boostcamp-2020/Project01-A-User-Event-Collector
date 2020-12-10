import { Request, Response } from "express";
import { db } from "../../../mongo";

const postWebLog = async (req: Request, res: Response): Promise<void> => {
  db.web.insertOne(req.body, (err, r) => {
    return res.send(r);
  });
};

export default postWebLog;
