import { Router } from "express";
import authController from "../../../controllers/private/auth";

const router = Router();

router.get("/check", authController.checkJWT);

export default router;
