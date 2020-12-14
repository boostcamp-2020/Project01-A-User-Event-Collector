import { Router } from "express";
import newsController from "../../controllers/public/news";

const router = Router();
router.get("/", newsController.getAll);
router.get("/:id", newsController.getNews);

export default router;
