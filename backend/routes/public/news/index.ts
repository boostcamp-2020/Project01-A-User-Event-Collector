import { Router } from "express";
import newsController from "../../controllers/news";

const router = Router();
router.get("/", newsController.getAll);
router.get("/:id", newsController.getNews);

export default router;
