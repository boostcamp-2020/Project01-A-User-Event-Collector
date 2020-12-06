import { Request, Response, NextFunction } from "express";
import decodeJWT from "../utils/decodeJWT";

const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    const { token } = req.cookies;
    const user = decodeJWT(token);
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: "Unauthorized" });
  }
};

export default authenticate;
