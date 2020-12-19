import { Request, Response } from "express";
import {
  getAlbumCovers,
  getAlbumById,
  likeAlbum,
  unlikeAlbum,
} from "../../models/albums";

interface Controller {
  getAll(req: Request, res: Response): Promise<void>;
  getAlbum(req: Request, res: Response): Promise<void>;
  like(req: Request, res: Response): Promise<void>;
  unlike(req: Request, res: Response): Promise<void>;
}

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await getAlbumCovers(req.user);
    res.status(200).json({ Albums: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const getAlbum = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const result = await getAlbumById(+id, req.user);
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

const like = async (req: Request, res: Response): Promise<void> => {
  try {
    const { albumId } = req.body;
    const result = await likeAlbum(albumId, req.user);
    res.status(200).json({ Albums: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const unlike = async (req: Request, res: Response): Promise<void> => {
  try {
    const { albumId } = req.body;
    const result = await unlikeAlbum(albumId, req.user);
    res.status(200).json({ Albums: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const controller: Controller = { getAll, getAlbum, like, unlike };
export default controller;
