import { Router } from "express";
import searchController from "../../controllers/search";

const router = Router();
router.get("/", searchController.getAll);
router.get("/tracks", searchController.getTracks);
router.get("/artists", searchController.getArtists);
router.get("/albums", searchController.getAlbums);

export default router;
