import { Router } from "express";
import albumController from "../../../controllers/albums";

const router = Router();
router.get("/", albumController.getAll);
router.get("/:id", albumController.getAlbum);

export default router;
