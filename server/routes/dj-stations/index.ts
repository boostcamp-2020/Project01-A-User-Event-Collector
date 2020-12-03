import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("album index에요");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(id);
});

// 공부해서 바꾸자..
const djStationsRouter = router;
export default djStationsRouter;
