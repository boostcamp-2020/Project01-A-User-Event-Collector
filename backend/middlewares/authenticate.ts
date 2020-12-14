import { Request, Response, NextFunction } from "express";
import decodeJWT from "../utils/decodeJWT";

const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    console.log(req.path);
    const {
      headers: { authorization },
    } = req;
    if (!authorization)
      return res.status(401).send({ message: "Unauthorized" });

    const token = authorization.split(" ")[1];
    const userInfo = decodeJWT(token);
    req.user = userInfo;

    return next();
  } catch (err) {
    return res.status(401).send({ message: "Unauthorized", err });
  }
};

export default authenticate;
