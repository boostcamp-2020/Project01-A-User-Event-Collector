import { Request, Response, NextFunction } from "express";
import decodeJWT from "../utils/decodeJWT";

const authorizer = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    const mainPath = req.path.split("/")[1];
    const { authorization } = req.headers;

    if (authorization) {
      const token = authorization.split(" ")[1];
      const userInfo = decodeJWT(token);
      req.user = userInfo;
    } else if (mainPath === "user" || mainPath === "library") {
      throw new Error("Unauthorized");
    }
    return next();
  } catch (err) {
    return res.status(401).send(err);
  }
};

export default authorizer;
