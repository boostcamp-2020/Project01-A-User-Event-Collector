import { Router } from "express";
import albumController from "../../controllers/albums";

const router = Router();
router.get("/", albumController.getAll);
router.get("/:id", albumController.getAlbum);
router.post("/like", albumController.like);
router.post("/unlike", albumController.unlike);

export default router;
