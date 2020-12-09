import { Request, Response } from "express";
import { getUserLikeAlbums, postUserLikeAlbums } from "../../../models/library";

const getLibAlbums = async (req: Request, res: Response): Promise<void> => {
  const tmpUserId = 1;
  try {
    const result = await getUserLikeAlbums(tmpUserId);
    res.status(200).json({ Albums: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const postLibAlbums = async (req: Request, res: Response): Promise<void> => {
  const userId = 1; // decode jwt
  const { id: albumId } = req.params;
  try {
    const msg = await postUserLikeAlbums(userId, +albumId);
    res.status(200).json({ message: msg });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const deleteLibAlbums = async (req: Request, res: Response): Promise<void> => {
  // const userId = 1;
  // const { id: albumId } = req.params;
  try {
    // const msg = await postUserLikeAlbums(userId, +albumId);
    // res.status(200).json({ message: msg });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export { getLibAlbums, postLibAlbums, deleteLibAlbums };
