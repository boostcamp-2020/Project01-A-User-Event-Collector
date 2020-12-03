import express from "express";

const apiRouter = express.Router();

apiRouter.use("/albums", (req, res) => {
  res.send("albums");
});

apiRouter.use("/artists", (req, res) => {
  res.send("artist");
});

apiRouter.use("/dj-station", (req, res) => {
  res.send("dj");
});

apiRouter.use("/genres", (req, res) => {
  res.send("genres");
});

apiRouter.use("/library", (req, res) => {
  res.send("library");
});

apiRouter.use("/magazines", (req, res) => {
  res.send("magazines");
});

apiRouter.use("/news", (req, res) => {
  res.send("news");
});

apiRouter.use("/playlists", (req, res) => {
  res.send("playlists");
});

apiRouter.use("/search", (req, res) => {
  res.send("search");
});

apiRouter.use("/users", (req, res) => {
  res.send("users");
});

export default apiRouter;
