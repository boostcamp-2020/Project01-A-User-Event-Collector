import { Request, Response } from "express";
import {
  getPlaylistCovers,
  getPlaylistById,
  likePlaylist,
  unlikePlaylist,
} from "../../models/playlists";
import { makeOption } from "../../utils/makePrismaObtion";

interface Controller {
  getAll(req: Request, res: Response): Promise<void>;
  getPlaylist(req: Request, res: Response): Promise<void>;
  like(req: Request, res: Response): Promise<void>;
  unlike(req: Request, res: Response): Promise<void>;
}

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const optObj = makeOption(req.query, "author", "number");
    const result = await getPlaylistCovers(optObj);
    res.status(200).json({ Playlists: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const getPlaylist = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const result = await getPlaylistById(+id, req.user);
    if (!result) throw new Error("empty data");
    res.status(200).json({ Playlists: result });
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
    const { playlistId } = req.body;
    const result = await likePlaylist(playlistId, req.user);
    res.status(200).json({ Albums: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const unlike = async (req: Request, res: Response): Promise<void> => {
  try {
    const { playlistId } = req.body;
    const result = await unlikePlaylist(playlistId, req.user);
    res.status(200).json({ Albums: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const controller: Controller = { getAll, getPlaylist, like, unlike };
export default controller;
