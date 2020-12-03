import express from "express";
import albumsRouter from "./albums";
import artistsRouter from "./artists";
import djStationsRouter from "./dj-stations";
import genresRouter from "./genres";
import magazinesRouter from "./magazines";
import newsRouter from "./news";
import playlistsRouter from "./playlists";
import libraryRouter from "./library";
import searchRouter from "./search";
import authRouter from "./auth";

const apiRouter = express.Router();

apiRouter.use("/albums", albumsRouter);
apiRouter.use("/artists", artistsRouter);
apiRouter.use("/dj-stations", djStationsRouter);
apiRouter.use("/genres", genresRouter);
apiRouter.use("/magazines", magazinesRouter);
apiRouter.use("/news", newsRouter);
apiRouter.use("/playlists", playlistsRouter);
apiRouter.use("/library", libraryRouter);
apiRouter.use("/search", searchRouter);
apiRouter.use("/auth", authRouter);

export default apiRouter;
