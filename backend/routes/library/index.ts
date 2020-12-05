import { Router } from "express";
import libraryController from "../../controllers/library";

const router = Router();
router.get("/albums", libraryController.getLibAlbums);
router.get("/artists", libraryController.getLibArtists);
router.get("/playlists", libraryController.getLibPlaylists);
router.get("/tracks", libraryController.getLibTracks);

export default router;
