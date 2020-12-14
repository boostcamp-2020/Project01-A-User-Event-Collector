import { Router } from "express";
import userController from "../../controllers/users";

const router = Router();

router.get("/profile", userController.getUserProfile);

export default router;
