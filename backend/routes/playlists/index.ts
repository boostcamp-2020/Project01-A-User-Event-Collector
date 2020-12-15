import { Router } from "express";
import playlistController from "../../controllers/playlists";

const router = Router();
router.get("/", playlistController.getAll);
router.get("/:id", playlistController.getPlaylist);
router.post("/like", playlistController.like);
router.post("/unlike", playlistController.unlike);

export default router;
