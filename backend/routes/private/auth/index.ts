import { Router } from "express";
import authController from "../../../controllers/private/auth";

const router = Router();

router.get("/userinfo", authController.getUserInfo);

export default router;
