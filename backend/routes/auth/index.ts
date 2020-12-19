import { Router } from "express";
import authController from "../../controllers/auth";

const router = Router();
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/naver", authController.naverCallback);
router.get("/naverLogin", authController.naverRedirection);
export default router;
