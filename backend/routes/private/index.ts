import express from "express";
import authRouter from "./auth";

const privateRouter = express.Router();

privateRouter.use("/auth", authRouter);

export default privateRouter;
