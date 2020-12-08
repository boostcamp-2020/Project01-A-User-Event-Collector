import { Request, Response } from "express";
import { getUserLikeArtists } from "../../../models/library";

const getLibArtists = async (req: Request, res: Response): Promise<void> => {
  const tmpUserId = 1;
  try {
    const result = await getUserLikeArtists(tmpUserId);
    res.status(200).json({ Artists: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const postLibArtists = async (req: Request, res: Response): Promise<void> => {
  // const tmpUserId = 1;
  try {
    res.status(200).json();
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};
export { getLibArtists, postLibArtists };
