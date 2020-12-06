import { Request, Response } from "express";
import { getUserLikeTracks } from "../../models/library";

const getTracks = async (req: Request, res: Response): Promise<void> => {
  const tmpUserId = 1;
  try {
    const result = await getUserLikeTracks(tmpUserId);
    res.status(200).json({ Tracks: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default getTracks;
