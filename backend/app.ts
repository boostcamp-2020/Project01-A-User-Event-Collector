/* eslint-disable no-console */
import dotenv from "dotenv";
import express from "express";
import logger from "morgan";
import publicRouter from "./routes/public";
import privateRouter from "./routes/private";

if (process.env.NODE_ENV) {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

const app = express();
app.use(logger("short"));

app.use("/api", publicRouter);
app.use("/api", privateRouter);

app.listen(process.env.PORT || 4000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Start on Stage: ${process.env.STAGE}`);
  if (process.env.NODE_ENV) {
    console.log(`Server is on http://localhost:${process.env.PORT || 4000}`);
    console.log(`And http://127.0.0.1:${process.env.PORT || 4000}`);
  } else {
    // TODO: Servery URL 올리기
  }
});