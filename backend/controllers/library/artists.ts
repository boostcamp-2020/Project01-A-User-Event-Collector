import { Request, Response } from "express";
import { getUserLikeArtists } from "../../models/library";

const getArtists = async (req: Request, res: Response): Promise<void> => {
  const tmpUserId = 1;
  try {
    const result = await getUserLikeArtists(tmpUserId);
    res.status(200).json({ Artists: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default getArtists;
