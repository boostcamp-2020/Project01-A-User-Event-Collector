import express from "express";
import albumsRouter from "./albums";
import artistsRouter from "./artists";
import djStationsRouter from "./dj-stations";
import genresRouter from "./genres";
import magazinesRouter from "./magazines";
import newsRouter from "./news";
import playlistsRouter from "./playlists";
import libraryRouter from "./library";

const apiRouter = express.Router();

apiRouter.use("/albums", albumsRouter);
apiRouter.use("/artists", artistsRouter);
apiRouter.use("/dj-stations", djStationsRouter);
apiRouter.use("/genres", genresRouter);
apiRouter.use("/magazines", magazinesRouter);
apiRouter.use("/news", newsRouter);
apiRouter.use("/playlists", playlistsRouter);
apiRouter.use("/library", libraryRouter);

apiRouter.use("/auth", (req, res) => {
  res.send("auth");
});
apiRouter.use("/search", (req, res) => {
  res.send("search");
});
apiRouter.use("/users", (req, res) => {
  res.send("users");
});

export default apiRouter;
