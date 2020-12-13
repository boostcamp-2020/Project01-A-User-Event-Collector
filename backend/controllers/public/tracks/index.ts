import { Request, Response } from "express";
import { likeTrack, unlikeTrack } from "../../../models/tracks";

interface Controller {
  like(req: Request, res: Response): Promise<void>;
  unlike(req: Request, res: Response): Promise<void>;
}

const like = async (req: Request, res: Response): Promise<void> => {
  try {
    const { trackId } = req.body;
    const result = await likeTrack(trackId, req.user);
    res.status(200).json({ Albums: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const unlike = async (req: Request, res: Response): Promise<void> => {
  try {
    const { trackId } = req.body;
    const result = await unlikeTrack(trackId, req.user);
    res.status(200).json({ Albums: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const controller: Controller = { like, unlike };
export default controller;
