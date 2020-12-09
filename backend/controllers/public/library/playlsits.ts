import { Request, Response } from "express";
import {
  getUserLikePlaylists,
  postUserLikePlaylists,
} from "../../../models/library";

const getLibPlaylists = async (req: Request, res: Response): Promise<void> => {
  const tmpUserId = 1;
  try {
    const result = await getUserLikePlaylists(tmpUserId);
    res.status(200).json({ Playlists: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const postLibPlaylists = async (req: Request, res: Response): Promise<void> => {
  const userId = 1; // decode jwt
  const { id: playlistId } = req.params;
  try {
    await postUserLikePlaylists(userId, +playlistId);
    res.status(200).json();
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export { getLibPlaylists, postLibPlaylists };
