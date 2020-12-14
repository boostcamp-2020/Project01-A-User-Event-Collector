import { Router } from "express";
import djStationController from "../../controllers/public/dj-stations";

const router = Router();
router.get("/", djStationController.getAll);

export default router;
