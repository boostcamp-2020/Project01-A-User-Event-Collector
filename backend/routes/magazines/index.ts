import { Router } from "express";
import magazineController from "../../controllers/magazines";

const router = Router();
router.get("/", magazineController.getAll);
router.get("/:id", magazineController.getMagazine);

export default router;
