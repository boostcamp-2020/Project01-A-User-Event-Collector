import { Router } from "express";
import libraryController from "../../../controllers/public/library";

const router = Router();
router.get("/albums", libraryController.getLibAlbums);
router.get("/artists", libraryController.getLibArtists);
router.get("/playlists", libraryController.getLibPlaylists);
router.get("/tracks", libraryController.getLibTracks);

router.post("/albums/:id", libraryController.postLibAlbums);
router.post("/artists/:id", libraryController.postLibArtists);
router.post("/playlists/:id", libraryController.postLibPlaylists);
router.post("/tracks/:id", libraryController.postLibTracks);
export default router;
