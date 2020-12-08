import { Request, Response } from "express";
import { getUserLikeTracks } from "../../../models/library";

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
  console.log(trackId, userId);
  try {
    res.status(200).json();
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
export { getLibTracks, postLibTracks };
