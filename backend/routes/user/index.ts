import { Router } from "express";
import authController from "../../controllers/private/auth";

const router = Router();

router.get("/profile", authController.getUserProfile);

export default router;
