import { Router } from "express";
import artistController from "../../controllers/artists";

const router = Router();
router.get("/", artistController.getAll);
router.get("/:id", artistController.getArtist);

const artistsRouter = router;
export default artistsRouter;
