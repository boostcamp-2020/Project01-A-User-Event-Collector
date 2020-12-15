import { Router } from "express";
import artistController from "../../controllers/artists";

const router = Router();
router.get("/", artistController.getAll);
router.get("/:id", artistController.getArtist);
router.post("/like", artistController.like);
router.post("/unlike", artistController.unlike);

export default router;
