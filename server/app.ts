import dotenv from "dotenv";
import express from "express";

process.env.NODE_ENV
  ? dotenv.config({ path: ".env.production" })
  : dotenv.config({ path: ".env.development" });

const app = express();

app.get("/", (req, res) => res.send("asdasdd"));
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Start on Stage: ${process.env.STAGE}`);
});
