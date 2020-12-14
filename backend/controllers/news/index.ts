import { Request, Response } from "express";
import { getNewsCovers, getNewsById } from "../../models/news";
import { makeOption } from "../../utils/makePrismaObtion";

interface Controller {
  getAll(req: Request, res: Response): Promise<void>;
  getNews(req: Request, res: Response): Promise<void>;
}

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const optObj = makeOption(req.query);
    const result = await getNewsCovers(optObj);
    res.status(200).json({ News: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const getNews = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const result = await getNewsById(+id, req.user);
    if (!result) throw new Error("empty data");
    res.status(200).json({ News: result });
  } catch (err) {
    if (err === "empty data") {
      res.status(400).json({ statusCode: 400, message: "Bad Request" });
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
};

const controller: Controller = { getAll, getNews };
export default controller;
