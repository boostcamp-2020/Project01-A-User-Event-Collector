import { Router } from "express";
import trackController from "../../controllers/tracks";

const router = Router();
router.post("/like", trackController.like);
router.post("/unlike", trackController.unlike);

export default router;
