import { Request, Response } from "express";
import { getAlbumCovers, getAlbumById } from "../../models/albums";

interface Controller {
  getAll(req: Request, res: Response): Promise<void>;
  getAlbum(req: Request, res: Response): Promise<void>;
}

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await getAlbumCovers({});
    res.status(200).json({ Albums: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const getAlbum = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const result = await getAlbumById(+id);
    if (!result) throw new Error("empty data");
    res.status(200).json({ Albums: result });
  } catch (err) {
    if (err === "empty data") {
      res.status(400).json({ statusCode: 400, message: "Bad Request" });
    } else {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
};

const controller: Controller = { getAll, getAlbum };
export default controller;
