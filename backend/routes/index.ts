import express from "express";
import tracksRouter from "./tracks";
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
import userRouter from "./user";

const router = express.Router();

router.use("/tracks", tracksRouter);
router.use("/albums", albumsRouter);
router.use("/artists", artistsRouter);
router.use("/dj-stations", djStationsRouter);
router.use("/genres", genresRouter);
router.use("/magazines", magazinesRouter);
router.use("/news", newsRouter);
router.use("/playlists", playlistsRouter);
router.use("/library", libraryRouter);
router.use("/search", searchRouter);
router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/log", logRouter);

export default router;
