import { Router } from "express";
import logController from "../../../controllers/public/log";

const router = Router();
router.post("/web", logController.postWebLog);
router.post("/ios", logController.postiOSLog);

export default router;
