import { Request, Response } from "express";
import { db } from "../../mongo";

const getiOSLog = async (req: Request, res: Response): Promise<void> => {
  db.iOS.find({}).toArray((error, result) => {
    if (error) throw error;

    res.send(result);
  });
};

const postiOSLog = async (req: Request, res: Response): Promise<void> => {
  const insertData = {
    ...req.body,
    "user-agent": req.headers["user-agent"],
    loggedIn: !!req.user,
    userId: req.user ? req.user.id : null,
    username: req.user ? req.user.username : null,
  };
  db.iOS.insertOne(insertData, (err, r) => {
    return res.send(r);
  });
};

export { getiOSLog, postiOSLog };
