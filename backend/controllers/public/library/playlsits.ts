import { Request, Response } from "express";
import {
  getUserLikePlaylists,
  postUserLikePlaylists,
  deleteUserLikePlaylists,
} from "../../../models/library";
import decodeJWT from "../../../utils/decodeJWT";

const getLibPlaylists = async (req: Request, res: Response): Promise<void> => {
  const {
    headers: { authorization },
  } = req;

  if (!authorization) res.status(401).send({ message: "Unauthorized" });

  const token = authorization?.split(" ")[1];
  const { id: userId } = decodeJWT(token || " ");

  try {
    const result = await getUserLikePlaylists(userId);
    res.status(200).json({ Playlists: result });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const postLibPlaylists = async (req: Request, res: Response): Promise<void> => {
  const userId = 1; // decode jwt
  const { id: playlistId } = req.params;
  try {
    const msg = await postUserLikePlaylists(userId, +playlistId);
    res.status(200).json({ message: msg });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

const deleteLibPlaylists = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = 1; // decode jwt
  const { id: playlistId } = req.params;
  try {
    const msg = await deleteUserLikePlaylists(userId, +playlistId);
    res.status(200).json({ message: msg });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export { getLibPlaylists, postLibPlaylists, deleteLibPlaylists };
