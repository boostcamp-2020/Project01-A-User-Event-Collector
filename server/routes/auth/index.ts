import { Router } from "express";
import naverOauthController from "../../controllers/auth";

const router = Router();
router.use("/naver", naverOauthController);
router.get("/naverLogin", (req, res) => {
  const naverUrl: string = process.env.NAVER_LOGIN_URL || "/";
  res.redirect(naverUrl);
});
export default router;
