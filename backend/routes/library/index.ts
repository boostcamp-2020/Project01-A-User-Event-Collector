import { Router } from "express";
import libraryController from "../../controllers/public/library";
import userLikedItems from "../../controllers/public/userLikedItems";

const router = Router();
router.get("/test", userLikedItems);
router.get("/albums", libraryController.getLibAlbums);
router.get("/artists", libraryController.getLibArtists);
router.get("/playlists", libraryController.getLibPlaylists);
router.get("/tracks", libraryController.getLibTracks);

router.post("/albums/:id", libraryController.postLibAlbums);
router.post("/artists/:id", libraryController.postLibArtists);
router.post("/playlists/:id", libraryController.postLibPlaylists);
router.post("/tracks/:id", libraryController.postLibTracks);

router.delete("/albums/:id", libraryController.deleteLibAlbums);
router.delete("/artists/:id", libraryController.deleteLibArtists);
router.delete("/playlists/:id", libraryController.deleteLibPlaylists);
router.delete("/tracks/:id", libraryController.deleteLibTracks);
export default router;
