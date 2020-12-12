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
import logRouter from "./log";
import userToReq from "../../middlewares/userToReq";

const publicRouter = express.Router();

publicRouter.use(userToReq);
publicRouter.use("/albums", albumsRouter);
publicRouter.use("/artists", artistsRouter);
publicRouter.use("/dj-stations", djStationsRouter);
publicRouter.use("/genres", genresRouter);
publicRouter.use("/magazines", magazinesRouter);
publicRouter.use("/news", newsRouter);
publicRouter.use("/playlists", playlistsRouter);
publicRouter.use("/library", libraryRouter);
publicRouter.use("/search", searchRouter);
publicRouter.use("/auth", authRouter);
publicRouter.use("/log", logRouter);

export default publicRouter;
