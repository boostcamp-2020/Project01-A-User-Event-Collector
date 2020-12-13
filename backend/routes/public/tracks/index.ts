import { Router } from "express";
import trackController from "../../../controllers/public/tracks";

const router = Router();
router.put("/like", trackController.like);
router.put("/unlike", trackController.unlike);

export default router;
