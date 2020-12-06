import { Request, Response } from "express";

const checkJWT = (req: Request, res: Response): Response => {
  return res.status(200).send({ message: "success" });
};

export default checkJWT;
