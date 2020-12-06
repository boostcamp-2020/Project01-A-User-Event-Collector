import { Router } from "express";
import playlistController from "../../controllers/playlists";

const router = Router();
router.get("/", playlistController.getAll);
router.get("/:id", playlistController.getPlaylist);

export default router;
