import { Request, Response } from "express";
import {
  getUserLikeTracks,
  postUserLikeTracks,
  deleteUserLikeTracks,
} from "../../models/library";

const getLibTracks = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.user) throw new Error("Unauthorized");

    const result = await getUserLikeTracks(req.user.id);
    res.status(200).json({ Tracks: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const postLibTracks = async (req: Request, res: Response): Promise<void> => {
  const userId = 1; // decode jwt
  const { id: trackId } = req.params;
  try {
    const msg = await postUserLikeTracks(userId, +trackId);
    res.status(200).json({ message: msg });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const deleteLibTracks = async (req: Request, res: Response): Promise<void> => {
  const userId = 1; // decode jwt
  const { id: trackId } = req.params;
  try {
    const msg = await deleteUserLikeTracks(userId, +trackId);
    res.status(200).json({ message: msg });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
export { getLibTracks, postLibTracks, deleteLibTracks };
