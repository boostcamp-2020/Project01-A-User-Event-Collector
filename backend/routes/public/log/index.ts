import { Router } from "express";
import logController from "../../../controllers/public/log";

const router = Router();
router.get("/web", logController.getWebLog);
router.get("/ios", logController.getiOSLog);
router.post("/web", logController.postWebLog);
router.post("/ios", logController.postiOSLog);

export default router;
