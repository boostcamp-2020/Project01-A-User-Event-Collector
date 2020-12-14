import { Request, Response } from "express";
import { db } from "../../mongo";

const getiOSLog = async (req: Request, res: Response): Promise<void> => {
  db.iOS.find({}).toArray((error, result) => {
    if (error) throw error;

    res.send(result);
  });
};

const postiOSLog = async (req: Request, res: Response): Promise<void> => {
  db.iOS.insertOne(req.body, (err, r) => {
    return res.send(r);
  });
};

export { getiOSLog, postiOSLog };
