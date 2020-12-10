import { Request, Response } from "express";
import { db } from "../../../mongo";

const postiOSLog = async (req: Request, res: Response): Promise<void> => {
  db.iOS.insertOne(req.body, (err, r) => {
    return res.send(r);
  });
};

export default postiOSLog;
