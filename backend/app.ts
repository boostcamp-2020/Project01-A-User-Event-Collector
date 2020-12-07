/* eslint-disable no-console */
import dotenv from "dotenv";
import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import publicRouter from "./routes/public";
import privateRouter from "./routes/private";

if (process.env.NODE_ENV) {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

const app = express();

app.use(cookieParser());
app.use(logger("short"));
app.use(cors());

app.use("/api/private", privateRouter);
app.use("/api", publicRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server Start on Stage: ${process.env.STAGE}`);
  if (process.env.NODE_ENV) {
    console.log(`Server is on http://localhost:${process.env.PORT || 4000}`);
    console.log(`And http://127.0.0.1:${process.env.PORT || 4000}`);
  } else {
    // TODO: Servery URL 올리기
  }
});
