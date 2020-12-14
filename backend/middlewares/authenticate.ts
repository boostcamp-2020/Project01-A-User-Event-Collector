import { Request, Response, NextFunction } from "express";
import decodeJWT from "../utils/decodeJWT";

const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    const {
      headers: { authorization },
    } = req;
    if (!authorization) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const token = authorization.split(" ")[1];
    const user = decodeJWT(token);

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Unauthorized", err });
  }
};

export default authenticate;
