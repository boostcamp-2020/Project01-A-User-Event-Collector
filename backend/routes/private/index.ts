import express from "express";
import authenticate from "../../middlewares/authenticate";
import authRouter from "./auth";

const privateRouter = express.Router();

privateRouter.use(authenticate);
privateRouter.use("/auth", authRouter);

export default privateRouter;
