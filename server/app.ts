import dotenv from "dotenv";
import express from "express";
import logger from "morgan";
import apiRouter from "./routes";

if (process.env.NODE_ENV) {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

const app = express();
app.use(logger("short"));

app.use("/api", apiRouter);

app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Start on Stage: ${process.env.STAGE}`);
});
