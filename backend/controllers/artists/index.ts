import { Request, Response } from "express";
import {
  getArtistCovers,
  getArtistById,
  likeArtist,
  unlikeArtist,
} from "../../models/artists";

interface Controller {
  getAll(req: Request, res: Response): Promise<void>;
  getArtist(req: Request, res: Response): Promise<void>;
  like(req: Request, res: Response): Promise<void>;
  unlike(req: Request, res: Response): Promise<void>;
}

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await getArtistCovers(req.user);
    res.status(200).json({ Artists: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const getArtist = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const result = await getArtistById(+id, req.user);
    if (!result) throw new Error("empty data");
    res.status(200).json({ Artists: result });
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
    const { artistId } = req.body;
    const result = await likeArtist(artistId, req.user);
    res.status(200).json({ Albums: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const unlike = async (req: Request, res: Response): Promise<void> => {
  try {
    const { artistId } = req.body;
    const result = await unlikeArtist(artistId, req.user);
    res.status(200).json({ Albums: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const controller: Controller = { getAll, getArtist, like, unlike };
export default controller;
