/* eslint-disable no-console */
import dotenv from "dotenv";
import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import apiRouter from "./routes";
import { connect } from "./mongo";
import authorizer from "./middlewares/authorizer";

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger("short"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

connect();

app.use("/api", authorizer, apiRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server Start on Stage: ${process.env.NODE_ENV}`);
});
