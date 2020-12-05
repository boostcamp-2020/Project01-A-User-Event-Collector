import { Router } from "express";
import djStationController from "../../controllers/dj-stations";

const router = Router();
router.get("/", djStationController.getAll);

export default router;
