import { Request, Response } from "express";
import { getUserLikeTracks, postUserLikeTracks } from "../../../models/library";

const getLibTracks = async (req: Request, res: Response): Promise<void> => {
  const tmpUserId = 1;
  try {
    const result = await getUserLikeTracks(tmpUserId);
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
export { getLibTracks, postLibTracks };
