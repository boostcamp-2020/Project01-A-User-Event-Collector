import { Request, Response } from "express";
import { getGenreCovers, getGenreById } from "../../models/genres";

interface Controller {
  getAll(req: Request, res: Response): Promise<void>;
  getGenre(req: Request, res: Response): Promise<void>;
}

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await getGenreCovers();
    res.status(200).json({ Genres: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const getGenre = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const result = await getGenreById(+id);
    if (!result) throw new Error("empty data");
    res.status(200).json({ Genres: result });
  } catch (err) {
    if (err === "empty data") {
      res.status(400).json({ statusCode: 400, message: "Bad Request" });
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
};

const controller: Controller = { getAll, getGenre };
export default controller;
