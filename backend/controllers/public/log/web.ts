import { Request, Response } from "express";
import { db } from "../../../mongo";

const getWebLog = async (req: Request, res: Response): Promise<void> => {
  db.web.find({}).toArray((error, result) => {
    if (error) throw error;

    res.send(result);
  });
};

const postWebLog = async (req: Request, res: Response): Promise<void> => {
  db.web.insertOne(req.body, (err, r) => {
    return res.send(r);
  });
};

export { getWebLog, postWebLog };
