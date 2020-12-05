import { Request, Response } from "express";
import { getUserLikePlaylists } from "../../models/library";

const getPlaylists = async (req: Request, res: Response): Promise<void> => {
  const tmpUserId = 1;
  try {
    const result = await getUserLikePlaylists(tmpUserId);
    res.status(200).json({ Playlists: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default getPlaylists;
