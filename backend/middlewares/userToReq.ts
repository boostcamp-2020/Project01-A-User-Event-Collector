import { Request, Response, NextFunction } from "express";
import decodeJWT from "../utils/decodeJWT";

const userToReq = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    const { headers } = req;
    console.log(headers);
    const { token } = req.cookies;
    if (token) {
      const user = decodeJWT(token);
      req.user = user;
    }
    return next();
  } catch (err) {
    return res.status(401).send({ message: "Unauthorized", err });
  }
};

export default userToReq;
