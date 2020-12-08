import { Request, Response } from "express";
import { getUserLikeAlbums } from "../../../models/library";

const getAlbums = async (req: Request, res: Response): Promise<void> => {
  const tmpUserId = 1;
  try {
    const result = await getUserLikeAlbums(tmpUserId);
    res.status(200).json({ Albums: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default getAlbums;